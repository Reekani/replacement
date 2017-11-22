import {Action} from '@ngrx/store';

export const LEFT_BAR_SET_MODE = 'LEFT_BAR_SET_MODE';

export class LeftBarSetMode implements Action {
  readonly type = LEFT_BAR_SET_MODE;

  constructor(public payload: 'LOGIN' | 'REGISTER' | 'LOGGED_IN') {

  }
}

export type UiActions = LeftBarSetMode;
