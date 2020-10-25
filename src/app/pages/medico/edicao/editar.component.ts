import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'app/pages/base.component';

import { NgBrazilValidators } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Medico } from 'app/models/medico';
import { MedicoService } from 'app/services/medico/medico.service';

@Component({
  selector: 'editar-medico',
  templateUrl: 'editar.component.html'
})

export class EditarMedicoComponent extends BaseComponent implements OnInit {

  medicoForm: FormGroup;
  medico: Medico = new Medico();

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

    this.medicoForm = this.fb.group({
      id: ['', Validators.required],
      crm: ['', Validators.required],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.medicoService.capturarPorId(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        medico => this.medicoForm.patchValue(medico)
      );

    this.spinner.hide();
  }

  get form() { return this.medicoForm.controls; }

  editar() {
    this.submetido = true;
    if (!this.medicoForm.invalid) {
      this.spinner.show();
      this.medico = Object.assign({}, this.medico, this.medicoForm.value);
      this.medicoService.editar(this.medico)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          erro => { this.processarErro(erro)}
        );

    }
  }

  processarSucesso(response: any) {
    this.medicoForm.reset();
    this.spinner.hide();
    this.toastr.success('Médico editado', 'Sucesso', super.configurarToast());
    this.router.navigate(['/medico/listagem']);
  }

  processarErro(response: any) {
    this.spinner.hide();
    this.toastr.success('Não foi possível editar o médico!', 'Erro', super.configurarToastErro());
  } 

}
