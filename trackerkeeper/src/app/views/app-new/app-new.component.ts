import { GoalTrackService } from '../../services/goal-track.service';
import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../goal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-new',
  templateUrl: './app-new.component.html',
  styleUrls: ['./app-new.component.css']
})

export class AppNewComponent implements OnInit {

  constructor(private goalTrackService : GoalTrackService, private router : Router) { }

  ngOnInit() {}
  
  goal : Goal;
  name : string;
  time : number;

  /**
     * Handles name and time for goal, and updates the storage service to reflect the change.
     *
     * @param {string} name
     * @param {number} time
     */

  createNewGoal(name: string, time: number) {

    let nameCheck = this.goalTrackService.nameCheck(this.name);
    let timeCheck = this.goalTrackService.timeCheck(this.time);
    
    if (nameCheck && timeCheck) {
      this.goal = {
        name: this.name,
        time: this.time,
        selected: true,
        dates: []
      };

      localStorage.setItem(this.goal.name, JSON.stringify(this.goal));
      this.name = '';
      this.time = null;
      // localStorage.clear();
      console.log(localStorage);

      this.router.navigateByUrl('/Input');
    }
  }

}
