import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../shared/models/event';


@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
   event:Event=new Event({})

  constructor(private route:ActivatedRoute, private eventService:EventService){}


  ngOnInit(): void {
      this.route.params.subscribe((params)=>{
      this.eventService.getEvent(params['id']).subscribe({
        next: (event:Event)=>{
            this.event=event
            console.log(this.event)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      })
  }
}
