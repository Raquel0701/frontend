import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/empleado', pathMatch: 'full' },
  // Puedes agregar más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
