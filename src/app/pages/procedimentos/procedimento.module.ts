import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CadastroProcedimentoComponent } from './cadastro/cadastro.component';
import { EditarProcedimentoComponent } from './edicao/editar.component';
import { ExclusaoProcedimentoComponent } from './exclusao/exclusao.component';
import { ListagemProcedimentoComponent } from './listagem/listagem.component';
import { VisualizarProcedimentoComponent } from './visualizar/visualizar.component';

@NgModule({
    declarations: [
      CadastroProcedimentoComponent,
      ListagemProcedimentoComponent,
      ExclusaoProcedimentoComponent,
      EditarProcedimentoComponent,
      VisualizarProcedimentoComponent
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
      ProcedimentoService
    ]
  })
  export class ProcedimentoModule { }