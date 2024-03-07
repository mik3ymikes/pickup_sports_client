import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(page: number) {
    return this.http.get<Event[]>(`${environment.apiUrl}/events?page=${page}`);
  }

  getEvent(id: string | number) {
    return this.http.get<Event>(`${environment.apiUrl}/events/${id}`);
  }

  createEvent(event: Event) {
    return this.http.post(`${environment.apiUrl}/events`, event);
  }
}
