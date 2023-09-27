import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  constructor( 
    private userService: UserService, private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      username: ['prueba@qaroni.com', [Validators.required, Validators.email]],
      password: ['123456789', [Validators.required, Validators.maxLength(8)]]
    })
  }
  ngOnInit(): void {
    
  }
  login() {
    this.userService.login(this.formLogin.value)
  }
}