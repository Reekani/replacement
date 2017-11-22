import {Action} from '@ngrx/store';

export const USER_SET_LOGIN = 'USER_SET_LOGIN';

export class UserSetLogin implements Action {
  readonly type = USER_SET_LOGIN;

  constructor(public payload: string) {

  }
}

export type UserActions = UserSetLogin;
