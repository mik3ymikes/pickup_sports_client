import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Sport } from '../../shared/models/sport';
import { SportService } from '../../core/services/sport.service';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../shared/models/event';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {
eventForm: FormGroup= new FormGroup({
  title: new FormControl(""),
  content: new FormControl(""),
  start_date_time: new FormControl(""),
  end_date_time: new FormControl(""),
  guests: new FormControl(""),
  sportIds: new FormArray([])

})

sports: Sport[]=[]
selectedFile: File | null =null

constructor(private sportService:SportService, private eventService:EventService, private router:Router){}
ngOnInit(): void {
    this.loadSportsIds()
}

addSportToForm(){
  (this.eventForm.get("sportsIds") as FormArray).push(new FormControl(false))
}

loadSportsIds(){
   this.sportService.getSports().subscribe({
    next:(sports:any)=>{
     this.sports=sports;
     sports.forEach((sport:Sport)=>{
        this.addSportToForm()
     })
    },
    error: (error) =>{
      console.log(error)
    }
   })
}


get sportIds(): FormArray{
  return this.eventForm.get("sportIds") as FormArray
}


extractSportIds(){
  const sportIdsFormValue=this.eventForm.value.sportIds
  const sportIds =sportIdsFormValue.map((checked:boolean, i:number)=>{
    return checked ? this.sports[i].id : null
  }).filter((id:any)=>{
    return id !==null
  })
  return sportIds
}


onCreateEvent(){
  const sportIds=this.extractSportIds()
  const formData:any = new FormData();
  formData.append('title', this.eventForm.get('title')!.value)
  formData.append('content', this.eventForm.get('content')!.value)
  formData.append('guests', this.eventForm.get('guests')!.value)
  formData.append('start_date_time', this.eventForm.get('start_date_time')!.value)
  formData.append('end_date_time', this.eventForm.get('end_date_time')!.value)


  const event: Event = {
    sport_ids:sportIds,
    ...this.eventForm.value
  }
  this.eventService.createEvent(event).subscribe({
    next: () =>{
       this.router.navigate(['/events'])
    },
    error: (error)=>{
      console.log(error)
    }
  })

}
onfileSelected(event:any){
  if(event.target.files && event.target.files[0]){
   this.selectedFile=event.target.files[0]
  }
}
}
