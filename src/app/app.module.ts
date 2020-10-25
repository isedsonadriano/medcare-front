import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MedicoModule } from './pages/medico/medico.module';
import { PacienteModule } from './pages/paciente/paciente.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProcedimentoModule } from './pages/procedimentos/procedimento.module';
import { AtendimentoModule } from './pages/atendimento/atendimento.module';
import { LoginModule } from './pages/login/login.module';
import { ErrorInterceptor } from './services/interceptor/error.handler.service';
import { LogoutModule } from './pages/logout/logout.module';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    MedicoModule,
    LoginModule,
    LogoutModule,
    PacienteModule,
    ProcedimentoModule,
    AtendimentoModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
