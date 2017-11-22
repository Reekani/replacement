import {initialUiState, UiStore} from '../model/ui.store';
import {UiActions} from '../actions/ui.actions';

export function uiReducers(state = initialUiState, action: UiActions): UiStore {
  switch (action.type) {
    default:
      return state;
  }
}
