import {initialUserState, UserStore} from './user.store';
import {initialUiState, UiStore} from './ui.store';

export interface AppStore {
  user: UserStore;
  UI: UiStore;
}

export const initialAppState: AppStore = {
  user: initialUserState,
  UI: initialUiState
};
