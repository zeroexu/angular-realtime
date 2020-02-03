import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { UserProfileService } from "./../user-profile.service";

@Component({
  selector: "app-user-profile-list",
  templateUrl: "./user-profile-list.component.html",
  styleUrls: ["./user-profile-list.component.scss"]
})
export class UserProfileListComponent implements OnInit, OnDestroy {
  userProfiles: Observable<string[]>;
  currentUserProfile: string;
  private _userProfileSubscription: Subscription;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfiles = this.userProfileService.userProfiles;
    this._userProfileSubscription = this.userProfileService.currentUserProfile.subscribe(
      userProfile => (this.currentUserProfile = userProfile.id)
    );
  }

  ngOnDestroy() {
    this._userProfileSubscription.unsubscribe();
  }

  loadUserProfile(id: string) {
    this.userProfileService.getUserProfile(id);
  }

  addUserProfile() {
    this.userProfileService.addUserProfile();
  }
}
