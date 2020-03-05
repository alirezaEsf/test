import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { LoginWasSuccessful } from './auth.actions';

export const authReducer = createReducer(initialAuthState,
  on(LoginWasSuccessful, state => ({...state, loggedIn: true}))
  );
