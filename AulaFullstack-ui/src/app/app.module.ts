import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreateComponent } from "./usuario-create/UsuarioCreateComponent";
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { UsuarioEdicaoComponent } from './usuario-edicao/usuario-edicao.component';

const ROTAS: Routes = [
   { path: '',component: UsuarioListComponent },
   { path: 'create' , component:UsuarioCreateComponent},
   { path: 'list', component:UsuarioListComponent },
   {path: 'usuario/edit/:id', component:UsuarioEdicaoComponent},
   {path: 'usuario/delete/:id', component:UsuarioDeleteComponent} 

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
