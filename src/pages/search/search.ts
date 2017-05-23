import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.interface';
import {UserServiceProvider} from '../../providers/user.service';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  username: String;
  users: User[];
  items: User[];

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private userServiceProvider: UserServiceProvider) {
                this.userServiceProvider.mockGetAllUsers().subscribe((data: User[]) => this.users = data);
                this.items = this.users;
  }
  
  getUser(item: User): void {
    this.navCtrl.push('SearchResultsPage', {username: item.name});
  }
  getUserInfo(): void {
    this.navCtrl.push('SearchResultsPage', {username: this.username});
  }

  getUsers(ev: any): void {
    // Reset items back to all of the items
    //this.userServiceProvider.mockGetAllUsers().subscribe((data: User[]) => this.items = data);
    this.items = this.users;

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
