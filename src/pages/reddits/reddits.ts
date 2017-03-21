import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
	items:any;
  category: any;
  limit: any;
  sort: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  ngOnInit(){
  	this.getPosts(this.category, this.limit, this.sort);
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

  getPosts(category, limit, sort){
  	this.redditService.getPosts(category, limit, sort).subscribe(response =>{
  		console.log(response);
  		this.items = response.data.children;
  	});
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit, this.sort);
  }


}
