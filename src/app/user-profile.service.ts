import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { UserProfile } from "./user-profile";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  currentUserProfile = this.socket.fromEvent<UserProfile>("userProfile");
  userProfiles = this.socket.fromEvent<string[]>("userProfiles");

  constructor(private socket: Socket) {}

  getUserProfile(id: string) {
    this.socket.emit("getUserProfile", id);
  }

  addUserProfile() {
    this.socket.emit("addUserProfile", {
      id: this.userProfileId(),
      balance: ""
    });
  }

  editUserProfile(userProfile: UserProfile) {
    this.socket.emit("editUserProfile", userProfile);
  }

  private userProfileId() {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
