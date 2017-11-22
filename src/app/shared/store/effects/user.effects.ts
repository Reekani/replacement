import {Actions, Effect} from '@ngrx/effects';
import {AppStore} from '../model/app.store';
import {Store} from '@ngrx/store';
import {USER_SET_LOGIN} from '../actions/user.actions';
import {Injectable} from '@angular/core';
import 'rxjs';

@Injectable()
export class UserEffects {
  @Effect({dispatch: false})
  loginSetEffect = this.actions.ofType(USER_SET_LOGIN).do( () => {
    console.log('effect');
  });

  constructor(private actions: Actions,
              private store: Store<AppStore>) {
  }
}
