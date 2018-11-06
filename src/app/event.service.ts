import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Event } from './event';
import { Events } from './events-list';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    this.messageService.add('EventService: fetched events');
    return of(Events);
  }

  getEvent(id: number): Observable<Event> {
    this.messageService.add(`EventService: fetched event id=${id}`);
    return of(Events.find(event => event.id === id));
  }
}
