import { AuthState } from './auth/store/auth.state';
import { CifState } from './cif/store/cif.state';
import {SystemBasicDataState} from "./data-basics/store/system-basic-data.state";

export interface SahbaState {
  auth?: AuthState;
  cif?: CifState;
  systemBasicData?:SystemBasicDataState;
}

export const initialState: SahbaState = {};
