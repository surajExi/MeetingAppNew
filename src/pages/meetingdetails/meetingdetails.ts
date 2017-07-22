import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meetingdetails',
  templateUrl: 'meetingdetails.html',
})
export class MeetingdetailsPage {
	meeting :any; xyz :any;
  documents: Array<{title: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.meeting= this.navParams.data;
  	menu.enable(true);
   this.documents = [
      {title: 'Presales Discussion' },
      { title: 'Budget finalization'},
      { title: 'Operations improvement' },
      { title: 'Sales Improvement'},
      { title: 'Postsales discussion'}

    ];


  }
    // abc(ev, agenda) {
    //   console.log(agenda);
    //        //this.xyz=agenda;

    // }
 
   openMenu(evt) {
      if(evt == "left"){
         this.menu.enable(true, 'right');
         this.menu.enable(false, 'left');
      }
      this.menu.toggle();
  }
  

}
