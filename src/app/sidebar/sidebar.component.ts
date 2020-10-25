import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',              title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/atendimento/listagem',   title: 'Atendimentos',      icon:'nc-ambulance',    class: '' },
    { path: '/medico/listagem',        title: 'Médicos',           icon:'nc-circle-10',    class: '' },
    { path: '/paciente/listagem',      title: 'Pacientes',         icon:'nc-single-02',    class: '' },
    { path: '/procedimento/listagem',  title: 'Procedimentos',     icon:'nc-bullet-list-67',    class: '' },
    { path: '/logout',                  title: 'Logout',            icon:'nc-button-power',    class: '' }
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
