import { Component, Input, OnInit } from '@angular/core';
import { Procedimento } from 'app/models/procedimento';
import { BaseComponent } from 'app/pages/base.component';



@Component({
    selector: 'visualizar-procedimento',
    templateUrl: 'visualizar.component.html'
})

export class VisualizarProcedimentoComponent extends BaseComponent  {
   
    @Input()
    procedimento: Procedimento;

}
