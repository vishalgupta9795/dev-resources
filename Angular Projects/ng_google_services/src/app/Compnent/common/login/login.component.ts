import { Component } from '@angular/core';
import { BrowserWindowPopupService } from '../../../service/browser-window-popup.service';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-login',
  imports: [],
  providers: [BrowserWindowPopupService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private browserPopupServ: BrowserWindowPopupService,private userServ: UsersService) { }

GetUser() {
  this.userServ.getUsers().subscribe(users => {
    console.log(users); 
  })
}
loginWithGoogle() {
  debugger
  this.browserPopupServ.open('https://accounts.google.com/o/oauth2/v2/auth');
    console.log('Login with Google');
  }

  loginWithMicrosoft() {
    console.log('Login with Microsoft');
  }

  loginWithFacebook() {
    console.log('Login with Facebook');
  }

  loginWithApple() {
    console.log('Login with Apple');
  }

  onSubmit() {
    console.log('Email login submitted');
  }
}
