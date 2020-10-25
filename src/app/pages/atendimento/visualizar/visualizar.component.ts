import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from 'app/models/atendimento';
import { Medico } from 'app/models/medico';
import { BaseComponent } from 'app/pages/base.component';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';
import { PacienteService } from 'app/services/paciente/paciente.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'visualizar-atendimento',
    moduleId: module.id,
    templateUrl: 'visualizar.component.html'
})

export class VisualizarAtendimentoComponent extends BaseComponent implements OnInit {


    procedimentos: FormArray;
    atendimento: Atendimento = new Atendimento();

    constructor(
        private fb: FormBuilder,
        private pacienteService: PacienteService,
        private spinner: NgxSpinnerService,
        private atendimentoService: AtendimentoService,
        private router: Router,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.atendimentoService.capturarPorId(this.activatedRoute.snapshot.paramMap.get('id'))
            .subscribe(
                atendimento => this.atendimento = atendimento
            );
    }

}
