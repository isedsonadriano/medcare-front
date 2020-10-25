import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Atendimento } from 'app/models/atendimento';
import { Medico } from 'app/models/medico';
import { BaseComponent } from 'app/pages/base.component';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';
import { PacienteService } from 'app/services/paciente/paciente.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'cadastro-atendimento',
    templateUrl: 'cadastro.component.html'
})

export class CadastroAtendimentoComponent extends BaseComponent implements OnInit {

    atendimentoForm: FormGroup;
    procedimentos: FormArray;
    atendimento: Atendimento = new Atendimento();

    constructor(
        private fb: FormBuilder,
        private pacienteService: PacienteService,
        private spinner: NgxSpinnerService,
        private atendimentoService: AtendimentoService,
        private router: Router,
        private toastr: ToastrService,) {
        super();
    }

    ngOnInit(): void {
        this.atendimentoForm = this.fb.group({
            observacoes: [''],
            tipo: ['', Validators.required],
            tipoAtendimento: ['', Validators.required],
            paciente: this.fb.group({
                id: [''],
                codigo: ['', [Validators.required]],
                nome: ['', [Validators.required]],
                cpf: ['', [Validators.required]]
            }),
            medico: this.fb.group({
                id: [''],
                nome: ['', [Validators.required]]
            }),
            procedimentos: this.fb.array([this.buildProcedimento()])
        });
    }

    get form() { return this.atendimentoForm.controls; }

    get procedimentosForm(): FormArray { return this.atendimentoForm.get('procedimentos') as FormArray; }

    buildProcedimento(): FormGroup {
        return this.fb.group({
            id: ['', [Validators.required]],
            descricao: ['', [Validators.required]],
            quantidade: ['', [Validators.required]]
        });
    }

    adicionarProcedimento(): void {
        this.procedimentos = this.atendimentoForm.get('procedimentos') as FormArray;
        this.procedimentos.push(this.buildProcedimento());
    }

    capturarPaciente(event: any) {
        this.spinner.show();
        this.pacienteService.capturarPorCodigo(event.target.value)
            .subscribe(
                paciente => this.preencherSucesso(paciente),
                erro => this.preencherErro(erro));
    }

    preencherErro(erro) {
        this.spinner.hide();
        this.toastr.success('Paciente não encontrado!', 'Erro', super.configurarToastErro());
        this.atendimentoForm.get('paciente').get('codigo').setValue("");
        this.atendimentoForm.get('paciente').get('nome').setValue("");
        this.atendimentoForm.get('paciente').get('cpf').setValue("");

    }

    preencherSucesso(paciente) {
        this.spinner.hide();
        this.atendimentoForm.get('paciente').get('id').setValue(paciente.id);
        this.atendimentoForm.get('paciente').get('nome').setValue(paciente.nome);
        this.atendimentoForm.get('paciente').get('cpf').setValue(paciente.cpf);
    }

    cadastrar() {
        this.submetido = true;
        if (!this.atendimentoForm.invalid) {
            this.spinner.show();
            this.atendimento = Object.assign({}, this.atendimento, this.atendimentoForm.value);
            this.atendimentoService.cadastrar(this.atendimento)
                .subscribe(
                    sucesso => { this.processarSucesso(sucesso) },
                    erro => { this.processarErro(erro) }
                );
        }
    }

    buildMedico(medico: Medico) {
        this.atendimentoForm.get('medico').get('id').setValue(medico.id);
        this.atendimentoForm.get('medico').get('nome').setValue(medico.nome);
    }

    buildProcedimentoAutocomplete(event) {
        var arrayControl = this.atendimentoForm.get('procedimentos') as FormArray;
        var item = arrayControl.at(event.index);
        item.get('descricao').setValue(event.procedimento.descricao);
        item.get('id').setValue(event.procedimento.id);
    }

    processarSucesso(response: any) {
        this.atendimentoForm.reset();
        this.spinner.hide();
        this.toastr.success('Atendimento cadastrado!', 'Sucesso', super.configurarToast());
        this.router.navigate(['/atendimento/listagem']);
    }

    processarErro(response: any) {
        this.spinner.hide();
        this.toastr.success('Não foi possível cadastrar o atendimento!', 'Erro', super.configurarToastErro());

    }
}
