import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'app/pages/base.component';


import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MedicoService } from 'app/services/medico/medico.service';

@Component({
  selector: 'exclusao-medico',
  template: ''
})

export class ExclusaoMedicoComponent extends BaseComponent implements OnInit{

  constructor(private fb: FormBuilder,
              private medicoService: MedicoService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
     super();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.medicoService.excluir(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        () => this.processarSucesso(),
        () => this.processarErro()
      );
  }

  processarSucesso() {
    this.spinner.hide();
    this.toastr.success('Médico excluído', 'Sucesso', super.configurarToast());
    this.router.navigate(['/medico/listagem']);
  }

  processarErro() {
    this.spinner.hide();
    this.toastr.success('Não foi possível excluir', 'Erro', super.configurarToastErro());
  }

}
