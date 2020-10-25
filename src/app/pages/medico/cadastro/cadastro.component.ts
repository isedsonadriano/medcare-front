import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/pages/base.component';
import { Medico } from 'app/models/medico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MedicoService } from 'app/services/medico/medico.service';
import { NgBrazilValidators } from 'ng-brazil';

@Component({
    selector: 'cadastro-medico',
    moduleId: module.id,
    templateUrl: 'cadastro.component.html'
})

export class CadastroMedicoComponent extends BaseComponent implements OnInit{
   
    medicoForm: FormGroup;
    medico: Medico = new Medico();

    constructor(private fb: FormBuilder,
        private medicoService: MedicoService,
        private router:Router,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService) {
          super();
    }

    get form() { return this.medicoForm.controls; }

    ngOnInit(): void {
        this.medicoForm = this.fb.group({
            crm: ['', Validators.required],
            nome: ['', [Validators.required]],
            cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
            email: ['', [Validators.required,Validators.email]]
          });
    }

    cadastrar() {
        this.submetido = true;
        if (!this.medicoForm.invalid) {
          this.spinner.show();
          this.medico = Object.assign({}, this.medico, this.medicoForm.value);
          this.medicoService.cadastrar(this.medico)
            .subscribe(
              sucesso => { this.processarSucesso(sucesso) },
              erro => { this.processarErro(erro) }
            ); 
        }
      }

      processarSucesso(response: any) {
        this.medicoForm.reset();
        this.spinner.hide();
        this.toastr.success('Médico cadastrado!', 'Sucesso', super.configurarToast());
        this.router.navigate(['/medico/listagem']); 
      }

      processarErro(response: any) {
        this.spinner.hide();
        this.toastr.success('Não foi possível cadastrar o médico!', 'Erro', super.configurarToastErro());
      } 
     
}
