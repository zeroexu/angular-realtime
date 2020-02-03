import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserProfileListComponent } from "./user-profile-list/user-profile-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = { url: "http://localhost:4444", options: {} };

@NgModule({
  declarations: [AppComponent, UserProfileListComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
