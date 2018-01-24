import { AppCalendarComponent } from './views/app-calendar/app-calendar.component';
import { AppOutputComponent } from './views/app-output/app-output.component';
import { AppListComponent } from './views/app-list/app-list.component';
import { AppNewComponent } from './views/app-new/app-new.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInputComponent } from './views/app-input/app-input.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: 'New Track', component: AppNewComponent },
  { path: 'Input', component: AppInputComponent },
  { path: 'Track Output', component: AppOutputComponent },
  { path: 'Calendar', component: AppCalendarComponent },
  { path: 'List Tracks', component: AppListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}