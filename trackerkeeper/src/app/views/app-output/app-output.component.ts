import { GoalTrackService } from '../../services/goal-track.service';
import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../goal';
import { TimeObject } from '../../timeObject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-output',
  templateUrl: './app-output.component.html',
  styleUrls: ['./app-output.component.css']
})
export class AppOutputComponent implements OnInit {

  timeFrom: string;
  dailyMinutes : number = null;
  dailyPercentage : number = null;
  todayCheckbox : object;
  percentageDone : number = null;
  timePeriod : string = 'progress today';
  completed : string = ' today';
  dailyRecordedTimes : Array<any> = [];
  isMonthView : boolean;
  isYearView: boolean;
  dayOfMonth : Array<any>;

  constructor(private goalTrackService : GoalTrackService, private router : Router) { 
    
    let track = this.goalTrackService.findSelectedTrack();
    let sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 0);
    this.dailyMinAndPerc(track, sumInInterval, 0); 
    // this.dailyRecordedTimes = this.goalTrackService.findRecentTime(track['name'], 1);
    // this.dayOfMonth = this.addDayOfMonth(this.dailyRecordedTimes);
    this.dailyRecordedTimes = this.populateProgressBars(1);
    
  }
  
  ngOnInit() {
    let todayCheckbox = <HTMLInputElement> document.getElementById("today");
    todayCheckbox.checked = true;
    this.populateProgressBars(7);
    // this.dailyTimes = this.goalTrackService.findRecentTime(7);
  }

  /**
   * 
   * @param interval 
   * @param timeFrame
   * 
   * The interval param is the same as the one in this.percentCompleted(interval).
   * The timeFrame param is the range, or the total number of days we use to 
   * divide the sum of the times we collected since the date we provided above.
   */
  dailyMinAndPerc(track, sumInInterval, daysInInterval) {
    this.dailyMinutes = this.goalTrackService.dailyMinutes(sumInInterval, daysInInterval);
    this.dailyPercentage = this.goalTrackService.dailyPercentage(track['name'], sumInInterval, daysInInterval);
    this.dailyPercentage = this.dailyPercentage / 60;
    this.dailyRecordedTimes = this.goalTrackService.findRecentTime(track['name'], 1);
    this.percentageDone = this.goalTrackService.percentOfEntireGoal(track['name'], sumInInterval);
  }

  addDayOfMonth(index) {
    let date : any = this.goalTrackService.dateOfNthDaysAgo(index);
    date = date.split('-');
    date = date[2];
    this.dayOfMonth = date;
    return date;
  }

  // Check to see if user is selecting checkboxes
  changeTimeFrame($event) {
    let timeValue = $event.target.id;
    try {
      let checkboxes : any = document.getElementsByClassName('checkbox');
      for(var i=0; i<checkboxes.length; i++){
        checkboxes[i].attributes[4].ownerElement.checked = false;
      }
      this.isMonthView = false;
      this.isYearView = false;
      $event.target.attributes[4].ownerElement.checked = true;

      let track = this.goalTrackService.findSelectedTrack();

      switch (timeValue) {
        case 'today':
            let sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 0);
            this.dailyMinAndPerc(track, sumInInterval, 1); 
            this.timePeriod = 'progress today';
            this.completed = ' today';
            this.dailyRecordedTimes = this.populateProgressBars(1);
            break;
        case 'week':
            sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 6);
            this.dailyMinAndPerc(track, sumInInterval, 7); 
            this.timePeriod = 'daily average this week';
            this.completed = ' this week';
            this.dailyRecordedTimes = this.populateProgressBars(7);
            break;
        case 'month':
            sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 29);
            this.dailyMinAndPerc(track, sumInInterval, 30); 
            this.timePeriod = 'daily average this month';
            this.completed = ' this month';
            this.dailyRecordedTimes = this.populateProgressBars(30);
            this.isMonthView = true;
            break;
        case 'year':
            sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 364);
            this.dailyMinAndPerc(track, sumInInterval, 365);
            this.timePeriod = 'daily average this year';
            this.completed = ' this year';
            this.dailyRecordedTimes = this.populateProgressBars(365);
            this.isYearView = true;
            break;
      }
    }
    catch(error){
      console.log('Changing time frame via checkbox is not working ' + error.message);
    }
  }

  /**
   * 
   * @param time 
   * 
   * Take a date with format YYYY-MM-DD and reformat it to M/DD
   */

  trimmedDate(time) {
    time = time.split('-');
    let trimmedDate = time[1]; 
    if (trimmedDate.startsWith('0')) {
      trimmedDate = trimmedDate[1];
    }     
    trimmedDate += '/' + time[2];
    console.log(trimmedDate);
    return trimmedDate;
  }

  /**
   * 
   * @param track 
   * @param datePlaceholder 
   * 
   * This simply loops thru a track's dates property for matching dates provided from
   * the populateProgressBars function below and returns the time from that date.
   */

  timeFinder(track, datePlaceholder) {
    let time;
    // loop thru selected track's dates property
    for (var i=0; i<track['dates'].length; i++) {
      if (track['dates'][i].recordedDate === datePlaceholder) {
        time = track['dates'][i].recordedMinutes;
        time = time / 60;
        time = time.toFixed(1);
        return time;
      } else {
        time = 0;
      }
    }
    return time;
  }
  
  /**
   * 
   * @param timeInterval 
   * 
   * Pass the number of date objects you want returned in a new progress bar array.
   * If time already exists inside the dates property of the track object for the 
   * dates created in this function, they'll will added to the object with the appropriate 
   * date. This func just returns date objects equal to the number of progress bars
   * you want created.
   */

  populateProgressBars(timeInterval) {
    try {
      // find selected track
      let track = this.goalTrackService.findSelectedTrack();
      // create new array
      let progressArray : Array<any> = [];
      // create objects to populate new array (equal to number passed as arg)
      for (var i=0; i<timeInterval; i++) {
        // create new date object for comparison
        var datePlaceholder = this.goalTrackService.dateOfNthDaysAgo(i);
        let progressBarObject : any = {
          'date' : this.trimmedDate(datePlaceholder),
          'time' : this.timeFinder(track, datePlaceholder)
        }
        progressArray.push(progressBarObject);
      }
      console.log(progressArray);
      return progressArray.reverse();
    }
    catch(error){
      console.log('Unable to populate progress bar array ' + error.message);
    }
  }

}
