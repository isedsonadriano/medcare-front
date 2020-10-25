import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'app/models/usuario';
import { BaseComponent } from 'app/pages/base.component';
import { LoginService } from 'app/services/login/login.service';

@Component({
  selector: 'login',
  template: ''
})

export class LogoutComponent extends BaseComponent implements OnInit {
 
  constructor(private router: Router,
              private loginService: LoginService){
    super();
    
  }
  ngOnInit(): void {
    this.loginService.localStorage.limparDadosLocaisUsuario();
    this.router.navigate(['/login']);   
  }  
 
}
