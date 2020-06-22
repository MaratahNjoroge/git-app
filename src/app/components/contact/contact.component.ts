import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `

  <!--form goes here-->
  
  <div class="contact">
  <form (ngSubmit)="processForm()">
  <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
  <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <!--name-->
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" id="form34" class="form-control validate">
          <label data-error="wrong" data-success="right" for="form34" [(ngModel)]="name" #nameInput="ngModel">Your name</label>
          <div class="error" *ngIf="nameInput.invalid && nameInput.dirty">
            Name is required and needs to be at least 3 characters long.
          </div>
        </div>
        
        <!--email-->
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form29" class="form-control validate">
          <label data-error="wrong" data-success="right" for="form29" [(ngModel)]="email" #emailInput="ngModel">Your email</label>
          <div class="error" *ngIf="emailInput.invalid && emailInput.dirty">
            Needs to be a valid email.
          </div>
        </div>

        
        <!--subject-->
        <div class="md-form mb-5">
          <i class="fas fa-tag prefix grey-text"></i>
          <input type="text" id="form32" class="form-control validate">
          <label data-error="wrong" data-success="right" for="form32">Subject</label>
        </div>
       
        <!--message-->
        <div class="md-form">
          <i class="fas fa-pencil prefix grey-text"></i>
          <textarea type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
          <label data-error="wrong" data-success="right" for="form8" [(ngModel)]="message" required #messageInput="ngModel">Your message</label>
          <div class="error" *ngIf="emailInput.invalid && emailInput.dirty">
              Your message is required!
          </div>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-unique">Send <i class="fas fa-paper-plane-o ml-1"></i></button>
      </div>
    </div>
  </div>
</div>

<div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch
    Modal Contact Form</a>
</div>
</form>
</div>
  `,
  styles:[`

  .contact {
    background-image: url("https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg");
    backgound-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
  }
  `

  ]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }
   
  ngOnInit() {}


  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
