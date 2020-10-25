import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MedicoAutoCompleteComponent } from './autocomplete/autocomplete.component';


import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CadastroAtendimentoComponent } from './cadastro/cadastro.component';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { ProcedimentoAutoCompleteComponent } from './autocomplete-procedimento/autocomplete.component';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';
import { ListagemAtendimentoComponent } from './listagem/listagem.component';
import { PipeModule } from 'app/shared/pipe/pipe.module';
import { ExclusaoAtendimentoCompoment } from './exclusao/exclusao.component';
import { VisualizarAtendimentoComponent } from './visualizar/visualizar.component';

@NgModule({
    declarations: [
      ListagemAtendimentoComponent,
      CadastroAtendimentoComponent,
      MedicoAutoCompleteComponent,
      ProcedimentoAutoCompleteComponent,
      ExclusaoAtendimentoCompoment,
      VisualizarAtendimentoComponent
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
      AutocompleteLibModule,
      PipeModule
    ],
    providers: [
     PacienteService,
     AtendimentoService
    ]
  })
  export class AtendimentoModule { }