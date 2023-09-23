import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [AppComponent, PerfilComponent, EmpleadoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
