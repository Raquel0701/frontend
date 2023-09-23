import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
// Importa todos los iconos de Bootstrap Icons


@NgModule({
  declarations: [AppComponent, ListaUsuariosComponent, PerfilComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
