import { Component, Input, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Procedimento } from 'app/models/procedimento';
import { BaseComponent } from 'app/pages/base.component';
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';


@Component({
  selector: 'listagem-procedimento',
  templateUrl: './listagem.component.html'
})

export class ListagemProcedimentoComponent extends BaseComponent implements OnInit {


  public procedimentos: Array<Procedimento> = [];
  procedimento = new Procedimento();

  constructor(private procedimentoService: ProcedimentoService,
              private modalService: NgbModal) { super() }


  ngOnInit(): void {
    this.procedimentoService.capturarTodos()
      .subscribe(
        data => this.procedimentos = data);
  }

  open(content, procedimento) {
    this.procedimento = procedimento;
    this.procedimentoService.capturarPorId(procedimento.id).subscribe(
      data => this.procedimento = data
    );
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
