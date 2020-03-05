import { SahbaState } from '../../sahba.store';
import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
export const selectFeature = (state: SahbaState) => state.auth;


export const selectIsLoggedIn = createSelector(selectFeature,  (state: AuthState) => state.loggedIn);


