import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'app/pages/base.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Procedimento } from 'app/models/procedimento';
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';

@Component({
  selector: 'editar-procedimento',
  templateUrl: 'editar.component.html'
})

export class EditarProcedimentoComponent extends BaseComponent implements OnInit {

  procedimentoForm: FormGroup;
  procedimento: Procedimento = new Procedimento();

  constructor(private fb: FormBuilder,
              private prodimentoService: ProcedimentoService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
         super();
  }

  get form() { return this.procedimentoForm.controls; }

  ngOnInit(): void {

    this.spinner.show();

    this.procedimentoForm = this.fb.group({
      id: ['', Validators.required],
      codigo: ['', Validators.required],
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });

    this.prodimentoService.capturarPorId(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        procedimento => this.procedimentoForm.patchValue(procedimento)
      );

    this.spinner.hide();
  } 

  editar() {
    this.submetido = true;
    if (!this.procedimentoForm.invalid) {
      this.spinner.show();
      this.procedimento = Object.assign({}, this.procedimento, this.procedimentoForm.value);
      this.prodimentoService.editar(this.procedimento)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          erro => { this.processarErro(erro) }
        );
    }
  }

  processarSucesso(response: any) {
    this.procedimentoForm.reset();
    this.spinner.hide();
    this.toastr.success('Procedimento editado', 'Sucesso', super.configurarToast());
    this.router.navigate(['/procedimento/listagem']);
  }

  processarErro(response: any) {
    this.spinner.hide();
    this.toastr.success('Não foi possível editar o procedimento!', 'Erro', super.configurarToastErro());
  } 

}
