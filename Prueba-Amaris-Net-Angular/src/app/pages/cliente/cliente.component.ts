import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  documento: string = '';
  cliente?: Cliente;
  saldo?: number;
  tieneSaldo?: boolean;
  montoRequerido: number = 0;

  constructor(private clienteService: ClienteService) {}

  buscarCliente() {
    if (!this.documento) {
      alert('Por favor, ingrese un documento');
      return;
    }

    this.clienteService.getClientePorDocumento(this.documento).subscribe({
      next: (response) => {
        if (response?.data) {
          this.cliente = response.data;
        } else {
          alert('Cliente no encontrado');
        }
      },
      error: (err) => {
        console.error('Error al obtener el cliente:', err);
        alert('Hubo un error al buscar el cliente');
      }
    });
  }

  consultarSaldo() {
    if (!this.cliente?.idCliente) return;

    this.clienteService.getSaldo(this.cliente.idCliente).subscribe({
      next: (response) => {
        if (response?.data !== undefined) {
          this.saldo = response.data;
        }
      },
      error: (err) => {
        console.error('Error al obtener saldo:', err);
        alert('Hubo un error al consultar el saldo');
      }
    });
  }

  verificarSaldoDisponible() {
    if (!this.cliente?.idCliente || this.montoRequerido <= 0) return;

    this.clienteService.tieneSaldoDisponible(this.cliente.idCliente, this.montoRequerido).subscribe({
      next: (response) => {
        if (response?.data !== undefined) {
          this.tieneSaldo = response.data;
        }
      },
      error: (err) => {
        console.error('Error al verificar saldo disponible:', err);
        alert('Hubo un error al verificar el saldo disponible');
      }
    });
  }
}
