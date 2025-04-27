import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteService } from './services/cliente.service';
import { MenuComponent } from './menu/menu.component';
import { FondosComponent } from './pages/fondos/fondos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FondosService } from './services/fondos.service';
import { HistorialComponent } from './pages/historial/historial.component';
import { TransaccionService } from './services/transaccion.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MenuComponent,
    ClienteComponent,
    MenuComponent,
    AppRoutingModule,
    RouterModule, 
    FondosComponent,
    HistorialComponent,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    FondosService,
    TransaccionService


  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
