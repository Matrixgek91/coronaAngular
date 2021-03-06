import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaService {

  constructor() { }

  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({text: message});
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage() {
    return this.subject.asObservable();
  }

}
