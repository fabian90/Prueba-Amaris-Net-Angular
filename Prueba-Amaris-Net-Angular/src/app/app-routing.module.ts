import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'cliente', component: ClienteComponent } // Redirecciona cualquier ruta inválida a /cliente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}