import { Component, Input } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { BaseComponent } from 'app/pages/base.component';

@Component({
    selector: 'visualizar-paciente',
    templateUrl: 'visualizar.component.html'
})

export class VisualizarPacienteComponent extends BaseComponent  {
   
    @Input()
    paciente: Paciente;

    constructor() {
        super();
    }

}
