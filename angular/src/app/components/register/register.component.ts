import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  email: String;
  firstname: String;
  lastname: String;
  confirmpwd: String;
  

  constructor(
    private _validateService: ValidateService,
    private _flashMsg: FlashMessagesService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmpwd: this.confirmpwd
    }

    if(!this._validateService.validateRegister(user)) {
      // console.log("Please fill in all fields");
      this._flashMsg.show("Please fill in all fields", { cssClass: 'alert-danger'});
      return false;
    }

    if(!this._validateService.validateEmail(user.email)) {
      this._flashMsg.show("Please use a valid email!", { cssClass: 'alert-danger'});
      return false;
    }

    if(!this._validateService.confirmPassword(user)) {
      this._flashMsg.show("Password not match!", { cssClass: 'alert-danger'});
      return false;
    }
    // console.log(this._validateService.validateRegister(user));

    this._authService.registerUser(user).subscribe(data => {
      // console.log(data);
      if(data.success) {
        this._flashMsg.show("You\'ve successfully created an account!", { cssClass: 'alert-success'});
        this._router.navigate(["/login"]);
      }else{
        this._flashMsg.show(data.message, { cssClass: "alert-danger"});
      }
    })
  }
}
