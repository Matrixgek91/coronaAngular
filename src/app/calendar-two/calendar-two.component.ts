import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listDayPlugin from '@fullcalendar/list';
import { EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-two',
  templateUrl: './calendar-two.component.html',
  styleUrls: ['./calendar-two.component.css']
})
export class CalendarTwoComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, listWeekPlugin, listDayPlugin, interactionPlugin];
  defaultView: 'dayGridMonth';
  calendarEvents: EventInput[] = [
    { title : 'weekend', start: new Date ( 'May 1, 2020, 16:30:00')  } 
  ]

  constructor() { }
  dayRender(args) {
    //console.log(args) 
    console.log("Double click"); //Console output 
    var cell:HTMLElement = args.el; 
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);

    }
  }


  addEvent(date) {
    console.log("I am doing something"); //Console output 
    console.log(this.calendarEvents)
    var title = prompt('Enter event title');
    if (title == '')return; 
    this.calendarEvents = this.calendarEvents.concat({
      title:title, 
      start:date 
    })
    this.dayRender('rerenderEvents');
  

  }

 

  ngOnInit(): void {
  }
}