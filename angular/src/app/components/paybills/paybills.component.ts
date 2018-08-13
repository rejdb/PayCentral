import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'ph-paybills',
  templateUrl: './paybills.component.html',
  styleUrls: ['./paybills.component.scss']
})

export class PaybillsComponent implements OnInit {
  @ViewChild('myForm') _form: any;
  nonce: any;
  showpane: Boolean;
  _user: Object;

  selected_id: String;
  selected_outlet: Object;

  bills_category: Object;
  bill_payload: Object;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _flashMsg: FlashMessagesService
  ) { 
    this.showpane = true; 
    this._user = this._authService.getuser();
  }

  ngOnInit() {
    this._authService._get('/coins/bills-category').subscribe(payload => {
      this.bills_category = payload.payouts_categories;
    });
  }

  get_bills_payload(bill_cat_id) {
    this.nonce = new Date().getTime();
    if(this.selected_id !== bill_cat_id) {
      this.bill_payload = null;
      this.selected_outlet = null;
      this.selected_id = bill_cat_id;
      this._authService._get('/coins/bills-category/' + bill_cat_id).subscribe(payload => {
        this.bill_payload = payload;
      });
    }
  }

  get_selected_payout() {
    // this.selected_outlet = outlet;
    console.log(this.selected_outlet);
  }

  onSubmitPayment(data) {

    //Validator
    for(let prop in data) {
      if(data[prop] == '' || data[prop] == undefined) {
        this._flashMsg.show(prop + ' is required', { cssClass: 'alert-danger text-center'});
        return false;
      }
    }

    let coins = Object.assign(data, {
      currency: "PHP",
      pay_with_wallet: "PBTC",
      payment_outlet: this.selected_outlet['id'],
      rate: data.amount
    });

    let user = Object.assign(this._user, {nonce: this.nonce});
    let postData = Object.assign({user : user}, {coins: coins});

    this._authService._post('/transact/billspay', postData).subscribe(data => {
      console.log(data);
      if(!data.success) {
        this._flashMsg.show(data.message, { cssClass: 'alert-danger text-center'});
      }else{
        this._form.reset();
        this.selected_outlet = null;
        this.showpane = true;
      }
    });

    return false;
  }

}
