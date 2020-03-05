import { createReducer, on } from '@ngrx/store';

import { initialSystemBasicDataState } from './system-basic-data.state';

export const systemBasicDataReducer = createReducer(initialSystemBasicDataState);
