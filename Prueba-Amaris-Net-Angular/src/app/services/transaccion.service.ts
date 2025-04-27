import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../interfaces/Transaccion.model';
import { ApiResponse } from '../interfaces/api-response.model';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private apiUrl = `${environment.apiUrl}api/Transaccion`;

  constructor(private http: HttpClient) {}

  suscribirAFondo(transaccion: Transaccion): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/suscribir`, transaccion);
  }

  cancelarFondo(transaccion: Transaccion): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/cancelar`, transaccion);
  }

  getHistorial(clienteId: string): Observable<ApiResponse<Transaccion[]>> {
    return this.http.get<ApiResponse<Transaccion[]>>(`${this.apiUrl}/${clienteId}`);
  }
}
