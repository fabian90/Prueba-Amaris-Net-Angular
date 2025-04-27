// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter, Routes } from '@angular/router';
// import { AppRoutingModule } from './app/app-routing.module';
// import { CommonModule } from '@angular/common';
// import { MenuComponent } from './app/menu/menu.component';
// import { ClienteComponent } from './app/pages/cliente/cliente.component';
// import { FondosComponent } from './app/pages/fondos/fondos.component';
// import { environment } from './environments/environment';
// import { provideHttpClient } from '@angular/common/http';
// import { HistorialComponent } from './app/pages/historial/historial.component';

// if (environment.production) {
//   enableProdMode();
// }

// const appRoutes: Routes = [
//   { path: '', component: MenuComponent },
//   { path: 'cliente', component: ClienteComponent },
//   { path: 'fondos', component: FondosComponent },
//   { path: 'HistorialTrans', component: HistorialComponent }
//   // { path: 'otra-ruta', component: OtroComponent }, // Ejemplo de otra ruta
//   // ... añade aquí todas tus demás rutas
// ];
// // Usa bootstrapApplication para arrancar la aplicación
// bootstrapApplication(AppComponent, {
//   providers: [
//     // { provide: AppRoutingModule, useClass: AppRoutingModule },  // Asegúrate de agregar los módulos necesarios
//     { provide: CommonModule, useClass: CommonModule },
//     { provide: MenuComponent, useClass: MenuComponent },
//     { provide: ClienteComponent, useClass: ClienteComponent },
//     { provide: FondosComponent, useClass: FondosComponent },
//     provideRouter(appRoutes),
//     provideHttpClient()
//   ]
// })
//   .catch(err => console.error(err));
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importa appConfig

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig) // Usa appConfig para las configuraciones
  .catch(err => console.error(err));