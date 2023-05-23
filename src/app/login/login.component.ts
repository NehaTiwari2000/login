import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "./../login.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private loginService: LoginService
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.initForm();
  }

  initForm() {
    return this.formBuilder.group({
      "email": [''],
      "password": ['']
    })
  }

  Login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value).subscribe(data => {
        console.log(data);
        localStorage.setItem('Authorization', data.accessToken);
        localStorage.setItem('UserName', data.userName);
        // will set the access token in the local storage 

      });
    this.getAllUserInfo();

  }
  getAllUserInfo() {
    this.loginService.get().subscribe(data => {
      console.log(data);

    })
  }

}
