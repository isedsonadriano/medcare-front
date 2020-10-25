import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Medico } from 'app/models/medico';
import { BaseComponent } from 'app/pages/base.component';
import { MedicoService } from 'app/services/medico/medico.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'listagem-medico',
  templateUrl: './listagem.component.html'
})

export class ListagemMedicoComponent extends BaseComponent implements OnInit{

  public medicos: Array<Medico> = [];
  public medico = new Medico();

  constructor(private medicoService: MedicoService,
              private spinner: NgxSpinnerService,
              private modalService: NgbModal){ 
              super();
  }
  
  ngOnInit(): void {
    this.spinner.show();
    this.medicoService.capturarTodos()
    .subscribe(
      data => this.medicos = data);
      this.spinner.hide();
   }

  open(content, medico) {
    this.medicoService.capturarPorId(medico.id).subscribe(
      data => this.medico = data
    );
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
