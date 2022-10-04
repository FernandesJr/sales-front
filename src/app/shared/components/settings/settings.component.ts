import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public formUser = this.formBuilder.group({
    name: ['', [Validators.required, Validators.max(50)]],
    lastName: ['', [Validators.required, Validators.max(50)]],
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
}
