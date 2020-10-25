import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TextMaskModule } from 'angular2-text-mask';
import { MedicoService } from 'app/services/medico/medico.service';
import { PipeModule } from 'app/shared/pipe/pipe.module';
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CadastroMedicoComponent } from './cadastro/cadastro.component';
import { EditarMedicoComponent } from './edicao/editar.component';
import { ExclusaoMedicoComponent } from './exclusao/exclusao.component';
import { ListagemMedicoComponent } from './listagem/listagem.component';
import { VisualizarMedicoComponent } from './visualizar/visualizar.component';


@NgModule({
    declarations: [
      CadastroMedicoComponent,
      ListagemMedicoComponent,
      ExclusaoMedicoComponent,
      EditarMedicoComponent,
      VisualizarMedicoComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgBrazil,
      TextMaskModule,
      RouterModule,
      BrowserModule,
      NgxSpinnerModule,
      PipeModule
    ],
    providers: [
      MedicoService
    ]
  })
  export class MedicoModule { }