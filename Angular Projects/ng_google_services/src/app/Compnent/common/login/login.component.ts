import { Component } from '@angular/core';
import { BrowserWindowPopupService } from '../../../service/browser-window-popup.service';

@Component({
  selector: 'app-login',
  imports: [],
  providers: [BrowserWindowPopupService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private browserPopupServ: BrowserWindowPopupService) { }
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
