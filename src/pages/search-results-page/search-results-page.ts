import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user.service';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-search-results-page',
  templateUrl: 'search-results-page.html',
})

export class SearchResultsPage {

  username: string;
  user: User;

  constructor(private userService: UserServiceProvider, private navCtrl: NavController, private navParams: NavParams) {}

  getUserInformation(): void {
    this.userService.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }
}

