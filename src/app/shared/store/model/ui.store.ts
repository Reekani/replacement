import {initialLeftBarState, LeftBarStore} from './left-bar.store';

export interface UiStore {
  leftBar: LeftBarStore;
}

export const initialUiState: UiStore = {
  leftBar: initialLeftBarState
}
