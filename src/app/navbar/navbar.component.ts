import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg bg-transparent">
    <a class="navbar-brand" href="#">GitHub</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home
           
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
       
        
      </ul>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item">
          <a class="nav-link waves-effect waves-light">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect waves-light">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link waves-effect waves-light">          
            <i class="fab fa-fw fa-linkedin-in"></i>
          </a>
          
        </li>
      </ul>
    </div>
  </nav>
  <!--/.Navbar -->

  `,
  styles:[
    
    
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
