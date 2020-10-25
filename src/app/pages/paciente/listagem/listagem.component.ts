import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Paciente } from 'app/models/paciente';
import { BaseComponent } from 'app/pages/base.component';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'listagem-paciente',
  templateUrl: './listagem.component.html'
})

export class ListagemPacienteComponent extends BaseComponent implements OnInit {

  public pacientes: Array<Paciente> = [];
  public paciente = new Paciente();

  constructor(private pacienteService: PacienteService,
              private spinner: NgxSpinnerService,
              private modalService: NgbModal) { 
          super() 
  }

  ngOnInit(): void {
    this.spinner.show();
    this.pacienteService.capturarTodos()
      .subscribe(
        data => this.pacientes = data);
        this.spinner.hide();
  }

  open(content, paciente) {
    this.pacienteService.capturarPorId(paciente.id).subscribe(
      data => this.paciente = data
    );
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
