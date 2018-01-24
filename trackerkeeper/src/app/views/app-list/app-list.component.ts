import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoalTrackService } from '../../services/goal-track.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  tracks : any;

  constructor(private goalTrackService : GoalTrackService, private router : Router) { }

  ngOnInit() {
    this.getAllTracks();
    console.log(this.goalTrackService.timeInInterval('firstTrack', 0, 0));
    console.log(this.goalTrackService.timeInInterval('firstTrack', 0, 7,));
  }

  // Display all the tracks from localstorage
  getAllTracks() {
    try {
      this.tracks = [];
      for (var i=0; i<localStorage.length; i++) {
        var track = localStorage.getItem(localStorage.key(i))
        track = JSON.parse(track);
        this.tracks.push(track)
      }
      return this.tracks;
    }
    catch(error) {
      console.log('Unable to retrive tracks list. ' + error.message);
    }
  }
  
  /**
   * 
   * Loop thru tracks from localstorage and turn the selected key 
   * for the track clicked to true
   */
  makeSelectedTrack($event) {
    try {
      let clickedTrack = $event.target.innerHTML;
      this.goalTrackService.deselectTracks();
      for (var i=0; i<localStorage.length; i++) {
        var storedTrack = localStorage.getItem(localStorage.key(i))
        storedTrack = JSON.parse(storedTrack);
        if (storedTrack['name'] === clickedTrack) {
          storedTrack['selected'] = true;
          localStorage.setItem(storedTrack['name'], JSON.stringify(storedTrack));
          this.router.navigateByUrl('/Input');
        }
      }
    }
    catch(error) {
      console.log('Could not change selected track ' + error.message);
    }
  }

  findPercentCompleted(trackName) {
    let percentCompleted = this.goalTrackService.overallCompleted(trackName);
    return percentCompleted.toFixed(0);
  }
}
