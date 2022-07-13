import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public iconPassword: string = 'visibility';
  public typePassword: string = 'password';

  public error: boolean = false;

  formAuth: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  public visiblePassword(): void {
    if(this.iconPassword === 'visibility') {
      this.iconPassword = 'visibility_off';
      this.typePassword = 'text';
    } else {
      this.iconPassword = 'visibility';
      this.typePassword = 'password';
    }
  }

  public auth(): void {
    console.log(this.formAuth.value);
  }

}
