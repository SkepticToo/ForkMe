import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  username: String;
  items: User[];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
      this.items = this.initializeUsers();
  }

  getUserInfo(): void {
    this.navCtrl.push('SearchResultsPage', {username: this.username});
  }

  initializeUsers() : User[]{
  const userList: User[] = [
  {
   name: "FooBar",
   email: "foobar@test.com"
  },
  {
    name : "BizBaz",
    email: "bizbaz@test.com"
  }
  ]
  return userList;
  }

onCancel (): void {
  this.items = this.initializeUsers();
}
  getUsers( ev:any): void {
  // Reset items back to all of the items
  this.items = this.initializeUsers();

// set val to the value of the ev target
var val = ev.target.value;

// if the value is an empty string don't filter the items
if (val && val.trim() != '') {
  this.items = this.items.filter((item) => {
    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  })
}
  }
}
