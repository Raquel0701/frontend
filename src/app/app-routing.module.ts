import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/empleado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
