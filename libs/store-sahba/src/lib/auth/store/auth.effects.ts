import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { DoLogin, LoginWasFailed, LoginWasSuccessful } from './auth.actions';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoLogin),
      exhaustMap(action =>
        this.authService.doLogin().pipe(
          map(user => LoginWasSuccessful()),
          catchError(error => of(LoginWasSuccessful()))
          // catchError(error => of(LoginWasFailed()))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
