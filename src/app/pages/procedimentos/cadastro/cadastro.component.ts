import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'app/pages/base.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ProcedimentoService } from 'app/services/procedimento/procedimento.service';
import { Procedimento } from 'app/models/procedimento';

@Component({
  selector: 'cadastro-procedimento',
  templateUrl: 'cadastro.component.html'
})

export class CadastroProcedimentoComponent extends BaseComponent implements OnInit {

  procedimentoForm: FormGroup;
  procedimento: Procedimento = new Procedimento();

  constructor(private fb: FormBuilder,
              private procedimentoService: ProcedimentoService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) {
       super();
  }

  ngOnInit(): void {
    this.procedimentoForm = this.fb.group(
      {
        codigo: ['', Validators.required],
        descricao: ['', [Validators.required]],
        valor: ['', Validators.required]
      }
    )
  }

  get form() { return this.procedimentoForm.controls; }

  cadastrar() {
    this.submetido = true;
    if(!this.procedimentoForm.invalid){
      this.spinner.show();
          this.procedimento = Object.assign({}, this.procedimento, this.procedimentoForm.value);
          this.procedimentoService.cadastrar(this.procedimento)
            .subscribe(
              sucesso => { this.processarSucesso(sucesso) },
              erro => { this.processarErro(erro) }
            );
    }
  }

  processarSucesso(response: any) {
    this.spinner.hide();
    this.procedimentoForm.reset();
    this.toastr.success('Procedimento cadastrado!', 'Sucesso', super.configurarToast());
    this.router.navigate(['/procedimento/listagem']); 
  }

  processarErro(response: any) {
    this.spinner.hide();
    this.toastr.success('Não foi possível cadastrar o procedimento!', 'Erro', super.configurarToastErro());
  } 

}
