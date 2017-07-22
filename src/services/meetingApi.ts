import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MeetingApi{
	MainUrl: string;
	public UserId: any;

	constructor(private http:Http){

			this.MainUrl="http://meetingappproapi20170629105424.azurewebsites.net/api/";
	}

	getMeetings(id){
		this.UserId = id; 
		
		return this.http.get(this.MainUrl+"MeetingConfigAPI/GetMeetingList/"+id).map(res=>res.json());
		

	}
	


}
