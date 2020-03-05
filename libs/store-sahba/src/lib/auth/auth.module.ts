import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/auth.reducer';
import { LoginEffect } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthFacade } from './facades/auth.facade';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  providers: [
    AuthService,
    AuthFacade
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([LoginEffect])
  ]
})
export class AuthStoreModule {
}
