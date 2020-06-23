import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { GithubService } from '../github.service';
import { UserService } from '../user.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  template:`

  <!--video-->  
  <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
       <div class="carousel-item active">
           <div class="view  rgba-black-strong">
              <video class="video-fluid" autoplay loop muted>
                  <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
             </video>
             <div class="mask">
                <div class="text-center">
                     <div class="col-4 offset-4">
                         <h1>GitHub Search<i class="fab fa-github"></i></h1>
                          <h3 class=""></h3>
                            <div class="row">
                               <div class="col-md-8">
                                  <form>
                                     <div class="form-group search">                                   
                                         <input type="text" class="form-control" placeholder="GitHub Name" name="username" [(ngModel)]="username" (keyup)="search()">
                                     </div>                     
                                 </form>
                              </div>   
                           </div>
                     </div>
                  </div>
                  <div class="text-center">
                      <button type="button" class="btn btn-lg btn-gradient"><a href="{{user.html_url}}" target="_blank">Show on github</a></button>
                  </div>
               </div>
          </div>
        </div>
     </div>

  <div class="container">
    <div *ngIf="user">
       <div class="panel panel-default">
           <div class="panel-heading">
              <h3 class="panel-title">{{user.name}}</h3>
           </div>
           <div class="panel-body">
              <div class="row">
                  <div class="col-md-4">
                      <img src="{{user.avatar_url}}" class="img-thumbnail github-avatar" alt="Avi"><br>
                      <br>
                      <a class="btn btn-block btn-info" href="{{user.html_url}}" target="_blank"> View Profile </a>
                  </div>
                  <div class="col-md-8">

                      <span class="btn btn-success">{{user.public_repos}} Public Repositories
                      </span>
                      <span class="btn btn-info">{{user.public_gists}} Public Gists </span>&nbsp;
                      <span class="btn btn-warning">{{user.followers}} Followers</span>&nbsp;
                      <span class="btn btn-danger">Following{{user.following}}</span>

                      <br>
                      <ul class="list-group">
                          <li class="list-group-item"><strong> User Name: <a href="{{user.html_url}}"
                                      target="_blank">{{user.login}}</a></strong></li>
                          <li class="list-group-item"><strong>Email: {{user.email}}</strong></li>

                      </ul>

                  </div>
              </div>
          </div>
      </div>
      <div class="panel panel-default bg-white">
          <div class="panel-heading">
              <h2 class="panel-title">Repositories</h2>
          </div>
          <div class="panel-body">
              <div *ngFor="let rep of repo">
                  <div class="row">
                      <div class="col-md-8">
                          <h4><a target="_blank" href="{{repo.html_url}}">{{rep.name}}</a></h4>
                          <p>{{rep.description}}</p>
                      </div>
                      <div class="col-md-2">
                          <span class="label">{{rep.forks}} Forks</span>
                      </div>
                      <div class="col-md-2">
                      <p>Updated on:{{rep.created_at|date}}</p>
                      </div>
                  </div>
                  <hr />
              </div>
          </div>

      </div>

  </div>
  </div>

  
  `,
  styles:[`
  backgroung-color: rgba(0, 0, 0, 0.8);
  `], 
  
  providers:[ GithubService, UserService ]  
})

export class HomeComponent implements OnInit {
  user: any;
  repo: any;
  username: string;

  constructor(private GithubService: GithubService) {
  }
 
  ngOnInit() {
  }
  search() {
    this.GithubService.changeUserNames(this.username);
    this.GithubService.getUser().subscribe(user => {
      this.user = user;
    } );
    this.GithubService.getRepo().subscribe(repo => {
      this.repo = repo;
    } );
    
  }

}


