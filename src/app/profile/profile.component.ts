import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: object;

  constructor(private profileService: ProfileService, 
    private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }


  // update() {
  //   this.router.navigate(["edit-profile"]);
  // }

  editProfile() {
    this.profileService.editProfile();
    console.log(this.userProfile);
  }

  

  
}

