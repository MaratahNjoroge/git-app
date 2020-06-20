import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:` 
      <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner" role="listbox">        
               <div class="carousel-item active">
                    <div class="view hm-black-strong">                         
                         <video class="video-fluid" autoplay loop>
                                 <source src="https://mdbootstrap.com/images/video/Nature-Sunset.mp4" type="video/mp4" />
                          </video>                            
                       <div class="mask">
                          <div class="text-center">
                              <div class="col-4 offset-4 ">                       
                                  <input type="email" id="defaultLoginFormEmail" class="form-control mb-4"placeholder="Username">
                              </div>
                           </div>
                            <div class="text-center">                         
                                <button type="button" class="btn btn-gradient">Submit</button>
                            </div>                 
                         </div>
                     </div>
             </div>
       </div>
  `,
  styles:[`
  .carousel-inner{ 
      height: 72vh;
    }
    .mask{
      margin-top: 110px;
    }
    .video-fluid {
      filter: brightness(70%);
    }
    button {   
      border-radius: 4px;
      padding: 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
    }

  `]
       
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
