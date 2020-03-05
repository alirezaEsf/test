import { createAction } from '@ngrx/store';

export const DoLogin = createAction('[Auth] Do Login');
export const LoginWasSuccessful = createAction('[Auth] Login Was Successful');
export const LoginWasFailed = createAction('[Auth] Login Was Failed');
