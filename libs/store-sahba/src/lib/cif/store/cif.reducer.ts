import { createReducer, on } from '@ngrx/store';

import { initialCifState } from './cif.state';

export const cifReducer = createReducer(initialCifState);
