import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component'; // Importar MenuComponent
import { ClienteComponent } from './pages/cliente/cliente.component'; // Importar ClienteComponent
import { FondosComponent } from './pages/fondos/fondos.component';
import { HistorialComponent } from './pages/historial/historial.component';

// Configuración de las rutas
const routes: Routes = [
  // { path: '', component: MenuComponent },  // Ruta principal
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },  // Ruta para cliente
  { path: 'fondos', component: FondosComponent },
  { path: 'HistorialTrans', component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa RouterModule con la configuración de rutas
  exports: [RouterModule]  // Exporte RouterModule para poder usar las rutas en la aplicación
})
export class AppRoutingModule {}