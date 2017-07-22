import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeetingdetailsPage} from '../meetingdetails/meetingdetails';
import { MeetingApi } from '../../services/meetingApi';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  id : any; 
  meetings : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, private meetingApi: MeetingApi) {
    this.id = this.navParams.data;
      


  }
  ionViewWillEnter(){
   
    this.getMeetings(this.id);
  }
    getMeetings(id){
        this.meetingApi.getMeetings(id).subscribe(response=>{
          this.meetings = response;
          
        })

     }

   showMeetingDetails($event,meeting){
  this.navCtrl.push(MeetingdetailsPage,meeting);
  
  }
  }
