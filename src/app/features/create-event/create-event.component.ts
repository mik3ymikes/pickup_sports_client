import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Sport } from '../../shared/models/sport';
import { SportService } from '../../core/services/sport.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [],
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

constructor(private sportService:SportService){}
ngOnInit(): void {
    this.loadSportsIds()
}

addSportToForm(){
  (this.eventForm.get("sportsIds") as FormArray).push(new FormControl(false))
}

loadSportsIds(){
   this.sportService.getSports().subscribe({
    next:(sports:any)=>{
     this.sports=sports
     sports.forEach(sport)
    },
    error: (error) =>{
      console.log(error)
    }
   })
}
}
