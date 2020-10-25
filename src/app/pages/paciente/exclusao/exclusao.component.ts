import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'app/pages/base.component';
import { PacienteService } from 'app/services/paciente/paciente.service';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'exclusao-paciente',
  template: ''
})

export class ExclusaoPacienteComponent extends BaseComponent implements OnInit{

  constructor(private pacienteService: PacienteService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
     super();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.pacienteService.excluir(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        () => this.processarSucesso(),
        () => this.processarErro()
      );
  }

  processarSucesso() {
    this.spinner.hide();
    this.toastr.success('Paciente excluído', 'Sucesso', super.configurarToast());
    this.router.navigate(['/paciente/listagem']);
  }

  processarErro() {
    this.spinner.hide();
    this.toastr.success('Não foi possível excluir', 'Erro', super.configurarToastErro());
  }

}
