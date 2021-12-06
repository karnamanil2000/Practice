import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: string = '';
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formbuilder: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false; 
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });

    if(this.userId !== '') {
      //View user details.
      this.userService.viewUser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        //Object.assign(this.userDetails, data);
        console.log(this.userDetails);

        //Build the edit form
        this.editUserForm = this.formbuilder.group({
          'userName':new FormControl(this.userDetails.userName),
          'email':new FormControl(this.userDetails.email)
        })
        this.dataLoaded = true;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  updateUser() {
    console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this.snackBar.open("User Updated Successfully");
    },error => {
      this.snackBar.open("Unable to update user");
    });
  }
}
