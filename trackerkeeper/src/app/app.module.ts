import { GoalTrackService } from './services/goal-track.service';
import { CalendarService } from './services/calendar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNewComponent } from './views/app-new/app-new.component';
import { AppInputComponent } from './views/app-input/app-input.component';
import { AppOutputComponent } from './views/app-output/app-output.component';
import { AppCalendarComponent } from './views/app-calendar/app-calendar.component';
import { AppListComponent } from './views/app-list/app-list.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppNewComponent,
    AppInputComponent,
    AppOutputComponent,
    AppCalendarComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    GoalTrackService,
    CalendarService
  ],
  bootstrap: [ AppComponent ],
  exports: [ AppRoutingModule ]
})
export class AppModule { }
