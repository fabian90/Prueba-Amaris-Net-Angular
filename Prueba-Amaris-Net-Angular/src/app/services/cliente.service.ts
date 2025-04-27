import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.model';
import { Cliente } from '../interfaces/cliente.model';
import { environment } from '../../environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = `${environment.apiUrl}/api/Cliente`;

  constructor(private http: HttpClient) {}

  getClientePorDocumento(documento: string): Observable<ApiResponse<Cliente>> {
    return this.http.get<ApiResponse<Cliente>>(`${this.apiUrl}/${documento}`);
  }

  getSaldo(clienteId: string): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.apiUrl}/saldo/${clienteId}`);
  }

  tieneSaldoDisponible(clienteId: string, monto: number): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(`${this.apiUrl}/saldo-disponible/${clienteId}/${monto}`);
  }
}
