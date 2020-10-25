import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListagemPacienteComponent } from './listagem/listagem.component';
import { CadastroPacienteComponent } from './cadastro/cadastro.component';


const pacienteRoutingModule: Routes = [
    {
        
        children: [
            {
                path: 'cadastro', component: CadastroPacienteComponent,
                //canDeactivate: [FornececedorGuard],
                //canActivate: [FornececedorGuard]
                //data: [{ claim: { nome: 'Fornecedor', valor: 'Adicionar'}}]
            },
            {
                path: 'listagem', component: ListagemPacienteComponent,
                //canDeactivate: [FornececedorGuard],
                //canActivate: [FornececedorGuard]
                //data: [{ claim: { nome: 'Fornecedor', valor: 'Adicionar'}}]
            }

            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pacienteRoutingModule)
    ],
    exports: [RouterModule]
})
export class PacienteRoutingModule { }