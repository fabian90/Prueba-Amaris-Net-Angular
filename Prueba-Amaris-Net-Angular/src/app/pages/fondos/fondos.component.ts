import { Component, OnInit } from '@angular/core';
import { FondosService } from '../../services/fondos.service'; // Asegúrate de la ruta correcta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Fondo } from '../../interfaces/fondo.model'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule,RouterLink], // Importa los módulos necesarios
  providers: [FondosService] // Provee el servicio en este componente (opcional, depende de dónde lo uses)
})
export class FondosComponent implements OnInit {
  fondosDisponibles: Fondo[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private fondosService: FondosService) { }

  ngOnInit(): void {
    this.cargarFondos();
  }

  cargarFondos() {
    this.isLoading = true;
    this.errorMessage = '';
    this.fondosService.getFondosDisponibles().subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response?.data) {
          this.fondosDisponibles = response.data;
        } else {
          this.errorMessage = 'No se encontraron fondos disponibles.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error al cargar los fondos:', err);
        let errorMessage = 'Error al cargar los fondos disponibles.';
        if (err?.error) {
          errorMessage = err.error; // Intenta mostrar el mensaje del backend
          // Si el mensaje está dentro de un objeto JSON, por ejemplo { "message": "..." }, usa:
          // errorMessage = err.error.message;
        }
        alert(errorMessage);
      }
    });
  }
}