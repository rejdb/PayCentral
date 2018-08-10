import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    // console.log(window.innerWidth);
  }

  onLogoutClick() {
    this._authService.logout();
    this._router.navigate(['/']);
  }

}
