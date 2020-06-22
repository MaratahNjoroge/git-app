import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from './date.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './components/contact/contact.component';

import { GithubService } from './github.service';
import { UserService } from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    DatePipe
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [ GithubService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
