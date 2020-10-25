import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'app/models/usuario';
import { BaseComponent } from 'app/pages/base.component';
import { LoginService } from 'app/services/login/login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent extends BaseComponent implements OnInit {
 
  loginForm: FormGroup;
  senhaInvalida = false;
  usuario: Usuario;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private loginService: LoginService){
    super();
    
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required]]
    });
  }

  get form() { return this.loginForm.controls; }

  login() {
    this.submetido = true;
    if (!this.loginForm.invalid) {
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value)
      this.loginService.login(this.usuario)
      .subscribe(
        sucesso => {this.processarSucesso(sucesso)},
        falha => {this.processarFalha(falha)}
      );
    }
  }

  processarSucesso(response:any){
    this.loginService.localStorage.salvarDadosLocaisUsuario(response);
    this.router.navigate(['/dashboard']); 
  }

  processarFalha(fail:any){
    this.senhaInvalida = true;
  }

}
