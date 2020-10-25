import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'app/models/paciente';
import { BaseComponent } from 'app/pages/base.component';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { NgBrazilValidators } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'editar-paciente',
  templateUrl: 'editar.component.html'
})

export class EditarPacienteComponent extends BaseComponent implements OnInit {

  pacienteForm: FormGroup;
  paciente: Paciente = new Paciente();

  constructor(private fb: FormBuilder,
              private pacienteService: PacienteService,
              private router: Router,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute) {
       super();
  }

  get form() { return this.pacienteForm.controls; }

  ngOnInit(): void {

    this.spinner.show();
    this.pacienteForm = this.fb.group({
      id: ['', Validators.required],
      codigo: ['', Validators.required],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required,Validators.email]],
      telefone: ['', [Validators.required, NgBrazilValidators.telefone]]
    });

    this.pacienteService.capturarPorId(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        paciente => this.pacienteForm.patchValue(paciente)
      );
      this.spinner.hide();
  } 

  editar() {
    this.submetido = true;
    if (!this.pacienteForm.invalid) {
      this.spinner.show();
      this.paciente = Object.assign({}, this.paciente, this.pacienteForm.value);
      this.pacienteService.editar(this.paciente)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          erro => { this.processarErro(erro) }
        );
    }
  }

  processarSucesso(response: any) {
    this.pacienteForm.reset();
    this.spinner.hide();
    this.toastr.success('Paciente editado', 'Sucesso', super.configurarToast());
    this.router.navigate(['/paciente/listagem']);
  }

  processarErro(response: any) {
    this.spinner.hide();
    this.toastr.success('Não foi possível editar o médico!', 'Erro', super.configurarToastErro());
  } 

}
