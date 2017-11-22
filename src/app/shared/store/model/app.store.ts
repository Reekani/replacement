import {initialUserState, UserStore} from './user.store';

export interface AppStore {
  user: UserStore;
}

export const initialAppState: AppStore = {
  user: initialUserState
};
