import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
	http:any;
	baseUrl:String;

	constructor(http:Http){
		this.http = http;
		this.baseUrl = 'https://www.reddit.com/r'
	}

	getPosts(category, limit, sort){
		return this.http.get(this.baseUrl+'/'+category+'/'+sort+'.json?limit='+limit)
			.map(res => res.json());
	}
}