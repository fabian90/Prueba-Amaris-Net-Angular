import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FondosComponent } from './pages/fondos/fondos.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' },
  { path: 'cliente', component: ClienteComponent },
  { path: 'fondos', component: FondosComponent },
  { path: 'HistorialTrans', component: HistorialComponent },
  // ... añade aquí todas tus demás rutas
];

export const appConfig: ApplicationConfig = { // <- Asegúrate de tener 'export' aquí
  providers: [
    provideRouter(routes),
    provideHttpClient()
    // Aquí puedes añadir otros providers a nivel de aplicación si es necesario
  ]
};