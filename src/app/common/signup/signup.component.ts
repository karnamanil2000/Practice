import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:[''],
      mobileNo:[''],
      email:[''],
      password:[''],
    })
  }

  signUp(){
    this.httpClient.post<any>("http://localhost:3000/signupAdmins",this.signupForm.value)
    .subscribe(res => {
      console.log(res);
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, error => {
      alert("Something went wrong");
    })
  }

}
