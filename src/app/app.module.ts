import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
