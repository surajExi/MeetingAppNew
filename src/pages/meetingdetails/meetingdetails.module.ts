import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingdetailsPage } from './meetingdetails';

@NgModule({
  declarations: [
    MeetingdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingdetailsPage),
  ],
  exports: [
    MeetingdetailsPage
  ]
})
export class MeetingdetailsPageModule {}
