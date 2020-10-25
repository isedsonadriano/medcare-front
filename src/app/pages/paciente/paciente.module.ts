import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { NgBrazil } from 'ng-brazil';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroPacienteComponent } from './cadastro/cadastro.component';
import { ListagemPacienteComponent } from './listagem/listagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditarPacienteComponent } from './edicao/editar.component';
import { ExclusaoPacienteComponent } from './exclusao/exclusao.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VisualizarPacienteComponent } from './visualizar/visualizar.component';

@NgModule({
    declarations: [
      CadastroPacienteComponent,
      ListagemPacienteComponent,
      EditarPacienteComponent,
      ExclusaoPacienteComponent,
      VisualizarPacienteComponent
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
      PacienteService
    ]
  })
  export class PacienteModule { }