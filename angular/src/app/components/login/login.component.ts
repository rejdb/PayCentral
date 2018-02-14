import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private _authService: AuthService,
    private _flashMsg: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    let user = {
      email: this.username,
      password: this.password
    }

    if(this.username == undefined || this.password == undefined) {
      this._flashMsg.show("Please fill in all fields!", { cssClass: 'alert-danger'});
      return false;
    }
    
    this._authService.authenticate(user).subscribe(data => {
      if(data.success) {
        this._authService.storeUserData(data.token, data.user);
        this._router.navigate(["/dashboard"]);
        this._flashMsg.show('You\'ve successfully login!', { cssClass: 'alert-danger'});
      }else{
        this._flashMsg.show(data.message, { cssClass: 'alert-danger'});
        this._router.navigate(['login']);
      }
    });
  }
}
