import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { NgBrazil } from 'ng-brazil';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from 'app/services/login/login.service';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgBrazil,
      TextMaskModule,
      RouterModule,
      BrowserModule,
      NgxSpinnerModule
    ],
    providers: [
      LoginService
    ]
  })
  export class LoginModule { }