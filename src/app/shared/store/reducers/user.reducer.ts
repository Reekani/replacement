import {initialUserState, UserStore} from '../model/user.store';
import {UserActions} from '../actions/user.actions';

export function userReducers(state = initialUserState, action: UserActions): UserStore {
  switch (action.type) {
    default:
      return state;
  }
}
