import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-paybills',
  templateUrl: './paybills.component.html',
  styleUrls: ['./paybills.component.scss']
})
export class PaybillsComponent implements OnInit {
  showpane: Boolean;

  selected_id: String;
  selected_outlet: Object;

  bills_category: Object;
  bill_payload: Object;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { this.showpane = true; }

  ngOnInit() {
    this._authService._get('/api/coins/bills-category').subscribe(payload => {
      this.bills_category = payload.payouts_categories;
      console.log(payload);
    });
  }

  get_bills_payload(bill_cat_id) {
    if(this.selected_id !== bill_cat_id) {
      this.bill_payload = null;
      this.selected_outlet = null;
      this.selected_id = bill_cat_id;
      this._authService._get('/api/coins/bills-category/' + bill_cat_id).subscribe(payload => {
        this.bill_payload = payload;
        console.log(payload);
      });
    }
  }

  get_selected_payout() {
    // this.selected_outlet = outlet;
    console.log(this.selected_outlet);
  }

  onSubmitPayment() {
    // console.log(this.form.value);
    console.log('testing');
    return false;
  }

}
