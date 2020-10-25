import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { CadastroPacienteComponent } from 'app/pages/paciente/cadastro/cadastro.component';
import { CadastroMedicoComponent } from 'app/pages/medico/cadastro/cadastro.component';
import { ListagemPacienteComponent } from 'app/pages/paciente/listagem/listagem.component';

import { EditarPacienteComponent } from 'app/pages/paciente/edicao/editar.component';
import { ExclusaoPacienteComponent } from 'app/pages/paciente/exclusao/exclusao.component';
import { ListagemMedicoComponent } from 'app/pages/medico/listagem/listagem.component';
import { ExclusaoMedicoComponent } from 'app/pages/medico/exclusao/exclusao.component';
import { EditarMedicoComponent } from 'app/pages/medico/edicao/editar.component';
import { ListagemProcedimentoComponent } from 'app/pages/procedimentos/listagem/listagem.component';
import { CadastroProcedimentoComponent } from 'app/pages/procedimentos/cadastro/cadastro.component';
import { ExclusaoProcedimentoComponent } from 'app/pages/procedimentos/exclusao/exclusao.component';
import { EditarProcedimentoComponent } from 'app/pages/procedimentos/edicao/editar.component';

import { CadastroAtendimentoComponent } from 'app/pages/atendimento/cadastro/cadastro.component';

import { ListagemAtendimentoComponent } from 'app/pages/atendimento/listagem/listagem.component';
import { ExclusaoAtendimentoCompoment } from 'app/pages/atendimento/exclusao/exclusao.component';
import { VisualizarAtendimentoComponent } from 'app/pages/atendimento/visualizar/visualizar.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    
    { path: 'atendimento/listagem',    component: ListagemAtendimentoComponent },
    { path: 'atendimento/cadastro',    component: CadastroAtendimentoComponent },
    { path: 'atendimento/exclusao/:id',    component: ExclusaoAtendimentoCompoment },
    { path: 'atendimento/visualizar/:id',    component: VisualizarAtendimentoComponent },
    
    { path: 'medico/listagem',    component: ListagemMedicoComponent },
    { path: 'medico/cadastro',    component: CadastroMedicoComponent },
    { path: 'medico/exclusao/:id',    component: ExclusaoMedicoComponent},
    { path: 'medico/editar/:id',    component: EditarMedicoComponent},

    { path: 'paciente/listagem',    component: ListagemPacienteComponent },
    { path: 'paciente/cadastro',    component: CadastroPacienteComponent },
    { path: 'paciente/exclusao/:id',    component: ExclusaoPacienteComponent },
    { path: 'paciente/editar/:id',    component: EditarPacienteComponent },

    { path: 'procedimento/listagem',    component: ListagemProcedimentoComponent },
    { path: 'procedimento/cadastro',    component: CadastroProcedimentoComponent },
    { path: 'procedimento/exclusao/:id',    component: ExclusaoProcedimentoComponent},
    { path: 'procedimento/editar/:id',    component: EditarProcedimentoComponent}

    
    
];
