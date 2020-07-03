import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service'
import { User } from '../../entities/user.entity'
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router }  from '@angular/router';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor(  private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      name: [{value: '', disabled: true}],
      bio: [{value: '', disabled: true}],
      public_repos: [{value: '', disabled: true}],
      company: [{value: '', disabled: true}],
      location: [{value: '', disabled: true}],
      blog: [{value: '', disabled: true}]
    });
  }
  
  /*
  ** get the github user detail 
  */
  onUsernameChange(event){
    this.userService.getUserByUsername(event.target.value).subscribe((user : User) => {
      this.userForm.setValue(user);
    })
  }

  /*
  **Navigate to shortener url page 
  */
  navigateToShortenerUrl(){
    this.router.navigate(["/shortenerurl"]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
