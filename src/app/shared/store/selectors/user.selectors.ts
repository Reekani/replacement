import {AppStore} from '../model/app.store';
import {createSelector} from '@ngrx/store';
import {UserStore} from '../model/user.store';

export const selectUser = (state: AppStore) => state.user;
export const selectUserLogin = createSelector(selectUser, (state: UserStore) => state.login);
