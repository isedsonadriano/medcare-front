import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Atendimento } from 'app/models/atendimento';
import { Medico } from 'app/models/medico';
import { BaseComponent } from 'app/pages/base.component';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';
import { MedicoService } from 'app/services/medico/medico.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'listagem-atendimento',
  templateUrl: './listagem.component.html'
})

export class ListagemAtendimentoComponent extends BaseComponent implements OnInit{

  public atendimentos: Array<Atendimento> = [];
  public atendimentoView = new Atendimento();

  constructor(private atendimentoService: AtendimentoService,
              private modalService: NgbModal,
              private spinner: NgxSpinnerService){ 
              super();
  }   
  
  ngOnInit(): void {
    this.spinner.show();
    this.atendimentoService.capturarTodos()
    .subscribe(
      data => this.atendimentos = data);
      this.spinner.hide();
   }

  open(content, atendimento) {
    this.atendimentoService.capturarPorId(atendimento.id).subscribe(
      data => this.atendimentoView = atendimento
    );
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
