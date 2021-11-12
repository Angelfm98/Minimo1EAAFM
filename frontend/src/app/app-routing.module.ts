import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './modificar/modificarpersona.component';
import { NuevogrupoComponent } from './NuevaPersona/nuevogrupo.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevogrupo', component: NuevogrupoComponent},
  { path: ':id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
