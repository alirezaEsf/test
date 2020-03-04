import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './src/auth/login/login.component';
import { HomeComponent } from './src/homePages/home/home.component';
import { AppRoutingModule } from './src/app-routing.module';
import { RouterModule } from '@angular/router';
import { ButtonModule, CardModule, InputTextModule } from 'primeng';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CardModule, InputTextModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
