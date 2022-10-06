import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  public error: boolean = false;

  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public sendEmail(): void {
    //Enviar email para recuperação da senha
  }

}
