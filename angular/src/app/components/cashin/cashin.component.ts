import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-cashin',
  templateUrl: './cashin.component.html',
  styleUrls: ['./cashin.component.scss']
})
export class CashinComponent implements OnInit {
  payout_features: Object;
  payout_by_category: Object;
  payouts: Object;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._authService._get('/api/coins/cashin-featured').subscribe(featured => {
      console.log(featured);
      this.payout_features = featured.payouts;

      this._authService._get('/api/coins/cashin').subscribe(payout => {
        console.log(payout);
        this.payouts = payout.payouts;
      });
    });
    
  }

  payoutByCategory(catid) {
    this._authService._get('/api/coins/cashin/' + catid).subscribe(data => {
      this.payout_by_category = data.user;
    });
  }

  nextsteps(feature) {
    console.log(feature);
  }

}
