import { Component, Input } from '@angular/core';
import { Medico } from 'app/models/medico';
import { BaseComponent } from 'app/pages/base.component';

@Component({
    selector: 'visualizar-medico',
    templateUrl: 'visualizar.component.html'
})

export class VisualizarMedicoComponent extends BaseComponent  {
   
    @Input()
    medico: Medico;

}
