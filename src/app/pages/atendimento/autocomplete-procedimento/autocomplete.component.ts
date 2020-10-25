import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Procedimento } from 'app/models/procedimento';

import { BaseComponent } from 'app/pages/base.component';
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';


@Component({
  selector: 'autocomplete-procedimento',
  templateUrl: 'autocomplete.component.html'
})

export class ProcedimentoAutoCompleteComponent extends BaseComponent implements OnInit {

  keyword = 'descricao';
//  @Output() valueChange = new EventEmitter<{procedimento: any, index: number}>();
  @Input() index: number;
  @Input() group:FormGroup;
  @Input() submetido:boolean;

  public procedimentos: Array<Procedimento> = [];
  procedimento: Procedimento = new Procedimento();
  
  constructor(private procedimentoService: ProcedimentoService){
    super();
  }

  get formProcedimento() { return this.group.controls; }

  ngOnInit(): void {
    console.log(this.group);
    this.procedimentoService.capturarTodos()
    .subscribe(
      retorno => this.preencherSucesso(retorno));
  }

  preencherSucesso(retorno){
    this.procedimentos = retorno
  }

  selectEvent(item) {
    this.group.get('id').setValue(item.id);
    this.group.get('descricao').setValue(item.descricao);
    this.group.get('quantidade').setValue(item.quantidade);
  }

  onChangeSearch(search: string) {
    this.procedimentoService.capturarTodos()
    .subscribe(
      retorno => this.preencherSucesso(retorno));
  }
 
}
