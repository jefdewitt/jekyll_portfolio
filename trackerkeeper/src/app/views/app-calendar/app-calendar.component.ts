import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.css'], 
  encapsulation: ViewEncapsulation.None
})

export class AppCalendarComponent implements OnInit {

  options : any;
  selector : any;
  routeFromCal : any;
  hourCheckbox : any;
  minuteCheckbox : any;

  constructor(private calendarService : CalendarService, private router : Router) { }
  
  ngOnInit() {
    this.calendarService.addCalendarToPage();
    this.options = this.calendarService.options;
    this.hourCheckbox = <HTMLInputElement> document.getElementById("hours");
    this.minuteCheckbox = <HTMLInputElement> document.getElementById("minutes");
    this.minuteCheckbox.checked = true;
  }

  onSelected($event) {
    this.calendarService.updateCalendarMonth($event);
  }

  ngAfterContentInit() {
 
    /**
     * Listen for clicks that occur on calendar cells and move to the input view
     * with any completed time for that date already loaded to be overwritten.
     */
    let selector = <HTMLBodyElement> document.querySelector('.main');
    selector.addEventListener('click', ($event : any) => {
      debugger;
      try {
        let multiEl = document.querySelectorAll('.days');
        let spanTime;
        if ( $event.target.children.length === 2 ) {
          spanTime = $event.target.children[1].innerHTML;
        } else if ( $event.target.children.length === 1 ) {
          spanTime = $event.target.firstElementChild.innerHTML;
        } else {
          spanTime = 0;
        }
        this.calendarService.minutesFromCal = spanTime;
        if (multiEl.length > 0) {
          if ($event.target.id) {
            this.calendarService.dateFromCal = $event.target.id;
            this.router.navigateByUrl('/Input');
          }
        }
      }
      catch(error) {
        console.log('Unable to find calendar cell id ' + error.message);
      }
    })
  }

  changeCheckbox($event) {
    if ($event.target.id === "minutes") { 
      if (this.minuteCheckbox.checked = true) {
        this.calendarService.hoursSelected = false;
        this.hourCheckbox.checked = false;
      } else {
        this.hourCheckbox.checked = true;
      }
    } else if ($event.target.id === "hours") {
      if (this.hourCheckbox.checked = true) {
        this.calendarService.hoursSelected = true;
        this.minuteCheckbox.checked = false;
      } else {
        this.minuteCheckbox.checked = true;
      }
    }
    this.hoursToMinutes($event);
  }

  hoursToMinutes($event) {
    let multiSpans : any = document.querySelectorAll('span');
    for (var i=0; i<multiSpans.length; i++) {
      let spanTimeStamp : any = multiSpans[i].className.split('-');
      spanTimeStamp = spanTimeStamp[0];
      let savedTimeInMin = multiSpans[i].innerHTML;
      if (spanTimeStamp === 'timeStamp') {
        if (this.hourCheckbox.checked) {
          let singleSpan : number = multiSpans[i].innerHTML / 60;
          multiSpans[i].innerHTML = singleSpan.toFixed(2);
        } else {
          let singleSpan : number = multiSpans[i].innerHTML * 60;
          multiSpans[i].innerHTML = singleSpan.toFixed(0);
        }
      }
    }
  }
  
}
