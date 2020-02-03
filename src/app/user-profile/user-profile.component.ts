import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserProfileService } from "../user-profile.service";
import { Subscription } from "rxjs";
import { startWith } from "rxjs/operators";
import { UserProfile } from "../user-profile";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: UserProfile;
  private _userProfileSubscription: Subscription;
  _;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this._userProfileSubscription = this.userProfileService.currentUserProfile
      .pipe(startWith({ id: "", balance: "0", name: "Sin nombre" }))
      .subscribe(_userProfile => (this.userProfile = _userProfile));
  }

  ngOnDestroy() {
    this._userProfileSubscription.unsubscribe();
  }

  editBalance() {
    this.userProfileService.editUserProfile(this.userProfile);
  }
}
