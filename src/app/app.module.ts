import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TopBarComponent} from './containers/top-bar/top-bar.component';
import {LeftBarComponent} from './containers/left-bar/left-bar.component';
import {CenterAreaComponent} from './containers/center-area/center-area.component';
import {ClarityModule} from 'clarity-angular';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
// import {EffectsModule} from '@ngrx/effects';
import {userReducers} from './shared/store/reducers/user.reducer';
// import {UserEffects} from './shared/store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    CenterAreaComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      user: userReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// EffectsModule.forRoot([
// UserEffects
// ])
