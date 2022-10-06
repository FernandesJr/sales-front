import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public iconPassword: string = 'visibility';
  public typePassword: string = 'password';

  public formUser = this.formBuilder.group({
    name: ['Gilberto', [Validators.required, Validators.max(50)]],
    lastName: ['Fernandes', [Validators.required, Validators.max(50)]],
    newPassword: ['', [Validators.required, Validators.max(50)]],
    repeatPassword: ['', [Validators.required, Validators.max(50)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public submit(): void{

  }

  public cancel(): void {

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
