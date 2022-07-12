import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public iconPassword: string = 'visibility';
  public typePassword: string = 'password';

  constructor() { }

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

}
