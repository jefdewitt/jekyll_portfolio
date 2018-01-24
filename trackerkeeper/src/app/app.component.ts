import { CalendarService } from './services/calendar.service';
import { Component, OnInit } from '@angular/core';
import { GoalTrackService } from '../app/services/goal-track.service';
import { Router, Event } from '@angular/router';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private goalTrackService : GoalTrackService, private calendarService : CalendarService, private router : Router){

    this.router.events.subscribe((event : any) => {
      try {
        if (event.url) {
          if ( (event.url === '/New%20Track') || (event.url === '/List%20Tracks') ) {
              this.title = 'Tracker';
              this.time = 'Keeper';
          } else if ( (event.url != '/New%20Track') || (event.url != '/List%20Tracks') ) {
              this.track = this.goalTrackService.findSelectedTrack();
              this.title = (this.track)? this.track['name'] : 'Tracker';
              this.time = (this.track)? this.track['time'] : 'Keeper';
          }
          if (event.url != '/Input') {
              this.calendarService.dateFromCal = '';
              this.calendarService.hoursSelected = false;
          }
        }
      }
      catch(error) {
        console.log('Unable to update track title ' + error.message);
      }
    });

  }

  track : Object;
  title : String;
  time : String;
  navItem: any;

  ngOnInit() { }

}
