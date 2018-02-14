import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.firstname == undefined ||
      user.lastname == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined) {
        return false;
      }else{
        return true;
      }
  };

  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
  }

  confirmPassword(user) {
    if(user.password !== user.confirmpwd) {
      return false;
    }else{
      return true;
    }
  }
}
