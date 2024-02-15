import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
currentPage:number=1
totalPages:number=0;
events:Event[]=[]

constructor(private eventService:EventService) {}

  ngOnInit(): void {
      this.loadEvents(this.currentPage)
  }
  loadEvents(page:number){
    this.eventService.getEvents(page).subscribe({
      next: (response:any) =>{
        this.events=response.events;
        this.currentPage=response.current_page;
        this.totalPages=response.total_pages;
        console.log(this.events, this.currentPage, this.totalPages)
      },
      error: (error:any) =>{
        console.error("errror fetching events", error)
      }
    })
  }

  nextPage(){
    if(this.currentPage<this.totalPages){
      this.loadEvents(this.currentPage +1)
    }
  }

  previousPage(){
    if(this.currentPage>1){
      this.loadEvents(this.currentPage-1)
    }
  }
}
