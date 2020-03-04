import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './src/auth/login/login.component';
import { HomeComponent } from './src/homePages/home/home.component';
import { AppRoutingModule } from './src/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
