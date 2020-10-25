import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'app/pages/base.component';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';

@Component({
  selector: 'exclusao-procedimento',
  template: ''
})

export class ExclusaoProcedimentoComponent extends BaseComponent implements OnInit{

  constructor(private procedimentoService: ProcedimentoService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
     super();
  }
  
  ngOnInit(): void {
    this.spinner.show();
    this.procedimentoService.excluir(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        () => this.processarSucesso(),
        () => this.processarErro()
      );
  }

  processarSucesso() {
    this.spinner.hide();
    this.toastr.success('Procedimento excluído', 'Sucesso', super.configurarToast());
    this.router.navigate(['/procedimento/listagem']);
  }

  processarErro() {
    this.spinner.hide();
    this.toastr.success('Não foi possível excluir', 'Erro', super.configurarToastErro());
  }

}
