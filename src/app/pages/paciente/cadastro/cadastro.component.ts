import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'app/models/paciente';
import { BaseComponent } from 'app/pages/base.component';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { NgBrazilValidators } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'cadastro-paciente',
  templateUrl: 'cadastro.component.html'
})

export class CadastroPacienteComponent extends BaseComponent implements OnInit {

  pacienteForm: FormGroup;
  paciente: Paciente = new Paciente();

  constructor(private fb: FormBuilder,
              private pacienteService: PacienteService,
              private router:Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) {
                super();
  }

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required,Validators.email]],
      telefone: ['', [Validators.required, NgBrazilValidators.telefone]]
    });
  }

  get form() { return this.pacienteForm.controls; }

  cadastrar() {
    this.submetido = true;
    if (!this.pacienteForm.invalid) {
      this.spinner.show();
      this.paciente = Object.assign({}, this.paciente, this.pacienteForm.value);
      this.pacienteService.cadastrar(this.paciente)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          erro => { this.processarErro(erro) }
        );
    }
  }

  processarSucesso(response: any) {
    this.pacienteForm.reset();
    this.spinner.hide();
    this.toastr.success('Paciente cadastrado!', 'Sucesso', super.configurarToast());
    this.router.navigate(['/paciente/listagem'])  
  }

  processarErro(response: any) {
    this.spinner.hide();
    this.toastr.success('Não foi possível cadastrar o paciente!', 'Erro', super.configurarToastErro());
  } 

  
}
