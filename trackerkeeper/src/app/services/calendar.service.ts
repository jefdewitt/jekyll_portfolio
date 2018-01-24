import { AppInputComponent } from './../views/app-input/app-input.component';
import { Injectable } from '@angular/core';
import { GoalTrackService } from './goal-track.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/pairwise';

@Injectable()
export class CalendarService {

  selector : any;
  dateFromCal : string;
  minutesFromCal : string;
  hoursSelected : boolean;
  options : Array<any>;
  todayDate : Date = new Date();
  curMonth : number = this.todayDate.getMonth()+1;
  curYear : number = this.todayDate.getFullYear();
  twelveMonths : any = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  constructor(private goalTrackService : GoalTrackService, private router : Router) { }

  // Find an element with a specific ID (#calendar) and bind the calendar to it
  addCalendarToPage(){
    try {
      let calendar = <HTMLInputElement> document.getElementById("calendar"); 
      // Builds calendar & populates option elements
      calendar.innerHTML=this.buildCal(this.todayDate, this.curMonth, this.curYear, this.twelveMonths);
      this.populateCalendarDropdown(this.twelveMonths, this.curYear);
      this.addDateSpan();
    }
    catch(error) {
      console.log('Unable to add calendar to the page ' + error.message);
    }
  }

  /**
   * 
   * @param todayDate 
   * @param month 
   * @param year 
   * @param twelveMonths 
   * 
   * @todo Replace abbreviated vars with more descriptive names
   * 
   * Builds a honkin' calendar, complete with a dropdown menu for the months (built
   * farther down below), month name and year as the calendar title, and weekday 
   * initials shown atop the 7 columns of the calendar.
   */

  buildCal(todayDate, month, year, twelveMonths){
    try {
      const lastDayOfMonths=[31,0,31,30,31,30,31,31,30,31,30,31];
      const firstDayOfYear = new Date(year, month-1, 1); //DD replaced line to fix date bug when current day is 31st
      let dayOne=firstDayOfYear.getDay()+1; //DD replaced line to fix date bug when current day is 31st
      let scanForToday=(year==todayDate.getFullYear() && month==todayDate.getMonth()+1)? todayDate.getDate() : 0 //DD added

      lastDayOfMonths[1]=(((firstDayOfYear.getFullYear()%100!=0)&&(firstDayOfYear.getFullYear()%4==0))||(firstDayOfYear.getFullYear()%400==0))?29:28;
      let table='<div class="main"><table class="" cols="7" cellpadding="0" border="0" cellspacing="0"><tr align="center">';
      table+='<td colspan="7" align="center" class="">' + twelveMonths[month-1] + ' - ' + year + '</td></tr><tr align="center">';
      var s;
      for (s=0; s<7; s++) table += '<td class="">' + "SMTWTFS".substr(s,1) + '</td>';
      table+='</tr><tr align="center">';
      for (let i=1; i<=42; i++) {
          var x = ( (i-dayOne>=0) && (i-dayOne<lastDayOfMonths[month-1]) )? i - dayOne + 1 : '&nbsp;';
          if (x == scanForToday) //DD added
          x = '<span class="today">' + x + '</span>' //DD added

          var displayMonth = month;
          if (displayMonth < 10) { displayMonth = '0' + displayMonth; }
          var displayDay = ( (i - dayOne >= 0) && (i - dayOne < lastDayOfMonths[month-1]) )? i - dayOne + 1 : '&nbsp;';
          if (displayDay < 10) { displayDay = '0' + displayDay; }

          table+='<td id="' + year + '-' + displayMonth + '-' + displayDay + '" class="days">'+x+'</td>';
          if(((i)%7==0)&&(i<36))table+='</tr><tr align="center">';
      }
      return table+='</tr></table></div>';
    }
    catch(error) {
      console.log('Unable to build calendar ' + error.message);
    }
  }

  /**
   * 
   * @param twelveMonths 
   * @param curYear 
   * 
   * Provide an array of months and the current year to populate the 
   * calendar dropdown menu.
   */

  populateCalendarDropdown(twelveMonths, curYear) {
    try {
      this.options = [];
      for (let i=0; i<12; i++) {//display option for 12 months of the year
        let opt = twelveMonths[i];
        this.options.push(opt);
      }
      return this.options;
    }
    catch(error) {
      console.log('Unable to populate calendar dropdown ' + error.message);
    }
  }

  // Rebuild calendar when a new month is selected from the dropdown
  updateCalendarMonth($event){
    try {
      var theMonth = parseInt($event.target.selectedIndex) + 1;
      var updatedMonth=this.buildCal(this.todayDate, theMonth, this.curYear, this.twelveMonths);
      document.getElementById("calendar").innerHTML = updatedMonth;
      this.addDateSpan();
    }
    catch(error) {
      console.log('Unable to update calendar month ' + error.message);
    }
  }

  // Add a span that contains the time completed for the date displayed
  addDateSpan() {
    try {
      let calendarMenu = <HTMLInputElement> document.getElementById("calendar-menu");
      if (calendarMenu) {
        const main = document.querySelector('.main:last-of-type');
        var selectedTrack = this.goalTrackService.findSelectedTrack();

        for (let i=0; i<selectedTrack['dates'].length; i++) {

            var recordedDate = selectedTrack['dates'][i].recordedDate;
            var recordedMinutes = selectedTrack['dates'][i].recordedMinutes;
            var dataCell = document.getElementById(recordedDate);

            if( dataCell ){
                var para = document.createElement("span");
                para.classList.add('timeStamp-' + recordedDate);
                var node = document.createTextNode(recordedMinutes);
                para.appendChild(node);
                dataCell.appendChild(para);
            }
          }
        }
      }
      catch(error) {
        console.log('Unable to add span to calendar cells ' + error.message);
      }
  }
}
