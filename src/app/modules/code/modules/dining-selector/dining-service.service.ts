import { Injectable } from '@angular/core';

import { DiningOptions } from './mock-options';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DiningService {

  constructor( private messageService: MessageService) { }

  getOptions(): Observable<string[]> {
    this.messageService.add('Retrieving Default Options');
    return of(DiningOptions);
  }
}
