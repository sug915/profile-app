import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  user: object = {
    username: "mitch",
    contact: "call me",
    bio: "i am minnie"
  };

  constructor(private router: Router) {}

  setUserProfile(newProfile): void {
    // this.user = {
    //   username: username,
    //   contact: contact,
    //   bio: bio
    // };
    this.user = newProfile;
    this.router.navigate(["profile"]);
  }
  getUserProfile(): object {
    return { ...this.user };
  }

  editProfile() {
    this.router.navigate(["edit"]);
  }

  // newUserProfile(newProfile): any {
  //   this.user = newProfile;
  //   this.router.navigate(["profile"]);
  // }

  // updateProfile() {
  //   setUserProfile(newProfile) {
  //     this.userProfile = newProfile;
  //     this.router.navigate(["/profile"]);
  //   }
    
  // }
}
