import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/cliente.model';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  imports: [CommonModule, FormsModule, RouterModule,RouterLink], // Agregar cualquier módulo necesario
  styleUrls: ['./cliente.component.scss'],
  providers: [ClienteService]
})
export class ClienteComponent {
  documento: string = '';
  cliente?: Cliente;
  saldo?: number;
  tieneSaldo?: boolean;
  montoRequerido: number = 0;
  isLoading: boolean = false; // Nueva variable

  constructor(private clienteService: ClienteService) {}

  buscarCliente() {
    if (!this.documento) {
      alert('Por favor, ingrese un documento');
      return;
    }
    this.isLoading = true; // Inicia la carga
    this.clienteService.getClientePorDocumento(this.documento).subscribe({
      next: (response) => {
        this.isLoading = false; // Finaliza la carga
        if (response?.data) {
          this.cliente = response.data;
        } else {
          alert('Cliente no encontrado');
        }
      },
      error: (err) => {
        this.isLoading = false; // Finaliza la carga (incluso en error)
        let errorMessage = 'Hubo un error al buscar el cliente';
        if (err?.error) {
          errorMessage = err.error; // Asume que el mensaje está directamente en err.error
          // Si el mensaje está dentro de un objeto JSON, por ejemplo { "message": "..." }, usa:
          // errorMessage = err.error.message;
        }
        alert(errorMessage);
      }
    });
  }

  consultarSaldo() {
    if (!this.cliente?.idCliente) return;
    this.isLoading = true;
    this.clienteService.getSaldo(this.cliente.idCliente).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response?.data !== undefined) {
          this.saldo = response.data;
        }
      },
      error: (err) => {
        this.isLoading = false;
        let errorMessage = 'Hubo un error al consultar el saldo';
        if (err?.error) {
          errorMessage = err.error; // Asume que el mensaje está directamente en err.error
          // Si el mensaje está dentro de un objeto JSON, por ejemplo { "message": "..." }, usa:
          // errorMessage = err.error.message;
        }
        alert(errorMessage);
      }
    });
  }

  verificarSaldoDisponible() {
    if (!this.cliente?.idCliente || this.montoRequerido <= 0) return;
    this.isLoading = true;
    this.clienteService.tieneSaldoDisponible(this.cliente.idCliente, this.montoRequerido).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response?.data !== undefined) {
          this.tieneSaldo = response.data;
        }
      },
      error: (err) => {
        this.isLoading = false;
        let errorMessage = 'Hubo un error al verificar el saldo disponible';
        if (err?.error) {
          errorMessage = err.error; // Asume que el mensaje está directamente en err.error
          // Si el mensaje está dentro de un objeto JSON, por ejemplo { "message": "..." }, usa:
          // errorMessage = err.error.message;
        }
        alert(errorMessage);
      }
    });
  }
}