import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppStore} from '../../shared/store/model/app.store';
import {Store} from '@ngrx/store';
import {selectUserLogin} from '../../shared/store/selectors/user.selectors';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftBarComponent implements OnInit {
  private userLogin: string;
  private loginInProgress = false;

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.store.select(selectUserLogin).subscribe(login => {
      this.userLogin = login;
      console.log(this.userLogin);
    });
  }

  submitLogin(){
    this.loginInProgress = true;
    return false;
  }

}
