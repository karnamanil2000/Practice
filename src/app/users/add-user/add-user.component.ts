import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private snackbar: MatSnackBar) { }


  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'userName': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      'email': new FormControl('',[Validators.required, Validators.minLength(8), Validators.email]),
    })
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      console.log("User Added");
      this.snackbar.open("User Added Successfully");
    }, error => {
      this.snackbar.open("Unable to Add User");
      console.log(error);
    });
  }

}
