import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { SecondPage } from '../dash-board/second';
import { GooglePlus } from '@ionic-native/google-plus';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import{ AngularFireModule } from 'angularfire2';

import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public googleplus:GooglePlus, private loadingController:LoadingController, public http:Http ) {}

      

  login(): void {
  let headers = new Headers();
        headers.append('Content-Type','application/json');
  let loader = this.loadingController.create({
    content: 'Authenticating Google...',
  });
  let load = this.loadingController.create({
   content: 'Signing into EboardOnline...'
    });
 
  
    this.googleplus.login({ 
      'webClientId': '171145923363-svn7goikndlo0tneiujcvujkcsvsmi97.apps.googleusercontent.com',
      'scopes': '',
     'offline':true


    }).then(res=>
    
    {
       loader.present().then(()=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
      loader.dismiss();
      load.present().then(()=>{
      var user = firebase.auth().currentUser;

        let body={
     "UserEmailAddress": user.email
     
     }
     
      this.http.post('http://meetingappproapi20170629105424.azurewebsites.net/api/Userconfigapi/checkforauthuser',JSON.stringify(body), {headers: headers})
      .map(res => res.json()).subscribe(data => { 

        if( data == 0)
      {
      
      load.dismiss();
      alert("User not found in EboardOnline...");
      }
      else{
      load.dismiss();
      this.navCtrl.push(SecondPage,data);
      }
      });

      });
     }).catch(ns=>{alert("Google Authentication Unsuccessful...")
  })
  });
  
  })

}
}  