import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/lista-usuarios', pathMatch: 'full' },
  // Puedes agregar más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
