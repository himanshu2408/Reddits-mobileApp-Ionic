import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {RedditsPage} from '../reddits/reddits';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  sort: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }


  getDefaults(){
    if(localStorage.getItem('category') != null){
    	this.category = localStorage.getItem('category');
    }
    else{
    	this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null){
    	this.limit = localStorage.getItem('limit');
    }
    else{
    	this.limit = 10;
    }

    if(localStorage.getItem('sort') != null){
      this.sort = localStorage.getItem('sort');
    }
    else{
      this.sort = 'new';
    }
  }

  setDefaults(){
  	localStorage.setItem('category', this.category);
  	localStorage.setItem('limit', this.limit);
    localStorage.setItem('sort', this.sort);
  	this.navCtrl.push(RedditsPage);
  }
 
}
