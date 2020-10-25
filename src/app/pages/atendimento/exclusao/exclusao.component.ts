import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'app/pages/base.component';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';

@Component({
  selector: 'exclusao-atendimento',
  template: ''
})
export class ExclusaoAtendimentoCompoment extends BaseComponent implements OnInit{

  constructor(private fb: FormBuilder,
              private atendimentoService: AtendimentoService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
     super();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.atendimentoService.excluir(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        paciente => this.processarSucesso()
      );
  }

  processarSucesso() {
    this.spinner.hide();
    this.toastr.success('Atendimento excluído', 'Sucesso', super.configurarToast());
    this.router.navigate(['/atendimento/listagem']);
  }

}
