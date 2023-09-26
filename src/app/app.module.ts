import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { MiModalComponent } from './components/mi-modal/mi-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EmpleadoComponent,
    AgregarEmpleadoComponent,
    MiModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
