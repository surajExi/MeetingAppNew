import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { NgCalendarModule } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/dash-board/second';
import { GooglePlus } from '@ionic-native/google-plus';
import{ AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
import { MeetingdetailsPage } from '../pages/meetingdetails/meetingdetails';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { HttpModule } from '@angular/http'




export const firebaseConfig={
   apiKey: "AIzaSyBGmV56nWOtoOCxWNQtL14o3uzuHHkl2Og",
    authDomain: "ionic-meeting-ios.firebaseapp.com",
    databaseURL: "https://ionic-meeting-ios.firebaseio.com",
    projectId: "ionic-meeting-ios",
    storageBucket: "ionic-meeting-ios.appspot.com",
    messagingSenderId: "171145923363"
}
firebase.initializeApp(firebaseConfig)
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    SecondPage,
    
    MeetingdetailsPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
  //  NgCalendarModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    SecondPage,
    
    MeetingdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}