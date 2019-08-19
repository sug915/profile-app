import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  newProfile: object;


  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
  }


  updateProfile(editForm: ngForm): any {
    this.profileService.setUserProfile(this.newProfile);
    console.log(this.newProfile);
  }

}
