import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = 'https://api.github.com/users/';
  private username = 'MaratahNjoroge';

  constructor(private http:HttpClient) { }
    getUser(){
      return this.http.get(this.url + this.username).pipe(map( res => res));
    }
    getRepo(){
      return this.http.get(this.url + this.username + '/repos').pipe(map( res => res));
    }
    changeUserNames(username: string) {
      this.username = username;
    }

}