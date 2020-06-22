import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { User } from './user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   
   fromURL: string = 'https://api.github.com';

  
  constructor( private http: HttpClient ) { }

  getUser(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.fromURL + '/users/' + userName);
}

}
