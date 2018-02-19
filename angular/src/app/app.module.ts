import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { SupportComponent } from './components/support/support.component';
import { CashinComponent } from './components/cashin/cashin.component';
import { BuyloadComponent } from './components/buyload/buyload.component';
import { PaybillsComponent } from './components/paybills/paybills.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'aboutus', component: AboutsComponent },
  { path:'support', component: SupportComponent },
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path:'cashin', component: CashinComponent, canActivate: [AuthGuard] },
  { path:'buyload', component: BuyloadComponent, canActivate: [AuthGuard] },
  { path:'paybills', component: PaybillsComponent, canActivate: [AuthGuard] },
  { path:'myaccounts', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutsComponent,
    SupportComponent,
    CashinComponent,
    BuyloadComponent,
    PaybillsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
