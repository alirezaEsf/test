import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './src/auth/login/login.component';
import { HomeComponent } from './src/homePages/home/home.component';
import { AppRoutingModule } from './src/app-routing.module';
import { RouterModule } from '@angular/router';
import { ButtonModule, CardModule, InputTextModule, ToastModule } from 'primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserAnimationsModule,BrowserModule, AppRoutingModule, RouterModule, CardModule, InputTextModule, ButtonModule, ReactiveFormsModule, ToastModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
