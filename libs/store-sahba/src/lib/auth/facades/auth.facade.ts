import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DoLogin } from '../store/auth.actions';
import { selectIsLoggedIn } from '../store/auth.selectors';
import { SahbaState } from '../../sahba.store';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(private store: Store<SahbaState>) {}

  loggedIn$ = this.store.pipe(select(selectIsLoggedIn));

  doLogin() {
    this.store.dispatch(DoLogin());
  }




}
