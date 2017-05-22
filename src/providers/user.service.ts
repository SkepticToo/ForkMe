import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../models/user.interface';
import { USER_LIST } from '../mocks/user.mocks';

@Injectable()
export class UserServiceProvider {

  constructor() {}

  getUsers(): User[] {
        return USER_LIST;
    }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);

  }

}
