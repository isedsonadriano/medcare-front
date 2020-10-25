import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Medico } from 'app/models/medico';

import { BaseComponent } from 'app/pages/base.component';
import { MedicoService } from 'app/services/medico/medico.service';

@Component({
  selector: 'autocomplete-medico',
  templateUrl: 'autocomplete.component.html'
})

export class MedicoAutoCompleteComponent extends BaseComponent implements OnInit {

  keyword = 'nome';
  recentes="Pesquisa recente...";

  public medicos: Array<Medico> = [];
    
  @Input() group:FormGroup
  @Input() submetido:boolean
  
  constructor(private medicoService: MedicoService){
    super();
  }

  get formMedico() { return this.group.controls; }

  ngOnInit(): void {
    this.medicoService.capturarTodos()
    .subscribe(
      retorno => this.preencherSucesso(retorno));
  }

  preencherSucesso(retorno){
    this.medicos = retorno;
  }

  selectEvent(item) {
    this.group.get('id').setValue(item.id)
    this.group.get('nome').setValue(item.nome);
  }

  onChangeSearch(search: string) {
    this.medicoService.capturarTodos()
    .subscribe(
      retorno => this.preencherSucesso(retorno));
  }  

  clear(e){
    this.group.get('id').setValue("")
    this.group.get('nome').setValue("");
  }

}
