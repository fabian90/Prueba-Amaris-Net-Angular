import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.model';
import { Fondo } from '../interfaces/fondo.model';
import { RecordsResponse } from '../interfaces/api-response.model';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FondosService {
  private apiUrl = `${environment.apiUrl}api/Fondo`;

  constructor(private http: HttpClient) {}

  getFondosDisponibles(): Observable<ApiResponse<Fondo[]>> {
    return this.http.get<ApiResponse<Fondo[]>>(`${this.apiUrl}/disponibles`);
  }
}
