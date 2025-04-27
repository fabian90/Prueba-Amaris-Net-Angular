import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service'; // Asegúrate de la ruta correcta
import { Transaccion } from '../../interfaces/Transaccion.model'; // Asegúrate de la ruta correcta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-historial',
    templateUrl: './historial.component.html',
    styleUrls: ['./historial.component.scss'],
    imports: [CommonModule, FormsModule, RouterLink],
    providers: [TransaccionService]
})
export class HistorialComponent implements OnInit {
    clienteId: string = '';
    historialTransacciones: Transaccion[] = [];
    isLoading: boolean = false;
    errorMessage: string = '';

    nuevaSuscripcion: Transaccion = { // Cambia el tipo a Transaccion e inicializa las propiedades necesarias
        idCliente: '',
        idFondo: '',
        medioNotificacion: '',
        tipo: 'Apertura', // Establece el tipo para la suscripción
        monto: 0,         // Puedes establecer un valor por defecto o permitir que el usuario lo ingrese
        fecha: new Date().toISOString(), // Establece la fecha actual
        descripcion: 'Apertura de fondo' // Puedes tener una descripción por defecto o permitir al usuario
    };
    isSubscribing: boolean = false;

    cancelacionFondo: Transaccion = { // Cambia el tipo a Transaccion e inicializa las propiedades necesarias
        idCliente: '',
        idFondo: '',
        medioNotificacion: '',
        tipo: 'Cancelación', // Establece el tipo para la cancelación
        monto: 0,         // Puedes establecer un valor por defecto o permitir que el usuario lo ingrese
        fecha: new Date().toISOString(), // Establece la fecha actual
        descripcion: 'Cancelación de fondo' // Puedes tener una descripción por defecto o permitir al usuario
    };
    isCancelling: boolean = false;

    constructor(private transaccionService: TransaccionService) { }

    ngOnInit(): void {
        // Puedes decidir si cargar el historial al inicio o esperar a que se ingrese un ID de cliente
        // this.cargarHistorial();
    }

    cargarHistorial() {
        if (!this.clienteId) {
            this.errorMessage = 'Por favor, ingrese un ID de cliente para ver el historial.';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.transaccionService.getHistorial(this.clienteId).subscribe({
            next: (response) => {
                this.isLoading = false;
                if (response?.data) {
                    this.historialTransacciones = response.data.sort((a, b) => {
                        // Convertir las cadenas de fecha a objetos Date para la comparación
                        const dateA = new Date(a.fecha);
                        const dateB = new Date(b.fecha);
                        // Ordenar de forma descendente (la fecha más reciente primero)
                        return dateB.getTime() - dateA.getTime();
                    });
                } else {
                    this.errorMessage = 'No se encontraron transacciones para este cliente.';
                }
            },
            error: (error) => {
                this.isLoading = false;
                console.error('Error al cargar el historial:', error);
                let errorMessage = 'Error al cargar el historial de transacciones.';
                if (error?.error) {
                    errorMessage = error.error;
                }
                this.errorMessage = errorMessage;
            }
        });
    }

    suscribirNuevoFondo() {
        this.isSubscribing = true;
        this.errorMessage = '';
        this.transaccionService.suscribirAFondo(this.nuevaSuscripcion).subscribe({
            next: (response) => {
                this.isSubscribing = false;
                if (response?.success) {
                    alert('Suscripción realizada exitosamente.');
                    this.nuevaSuscripcion = { // Limpiar el formulario inicializando todas las propiedades
                        idCliente: '',
                        idFondo: '',
                        medioNotificacion: '',
                        tipo: 'Apertura',
                        monto: 0,
                        fecha: new Date().toISOString(),
                        descripcion: 'Apertura de fondo'
                    };
                    this.cargarHistorial(); // Recargar el historial
                } else {
                    this.errorMessage = response?.message || 'Error al suscribirse al fondo.';
                    alert(this.errorMessage);
                }
            },
            error: (error) => {
                this.isSubscribing = false;
                console.error('Error al suscribirse al fondo:', error);
                let errorMessage = 'Error al suscribirse al fondo.';
                if (error?.error) {
                    errorMessage = error.error;
                }
                this.errorMessage = errorMessage;
                alert(errorMessage);
            }
        });
    }

    cancelarFondoActual() {
        this.isCancelling = true;
        this.errorMessage = '';
        this.transaccionService.cancelarFondo(this.cancelacionFondo).subscribe({
            next: (response) => {
                this.isCancelling = false;
                if (response?.success) {
                    alert('Cancelación de fondo realizada exitosamente.');
                    this.cancelacionFondo = { // Limpiar el formulario inicializando todas las propiedades
                        idCliente: '',
                        idFondo: '',
                        medioNotificacion: '',
                        tipo: 'Cancelación',
                        monto: 0,
                        fecha: new Date().toISOString(),
                        descripcion: 'Cancelación de fondo'
                    };
                    this.cargarHistorial(); // Recargar el historial
                } else {
                    this.errorMessage = response?.message || 'Error al cancelar el fondo.';
                    alert(this.errorMessage);
                }
            },
            error: (error) => {
                this.isCancelling = false;
                console.error('Error al cancelar el fondo:', error);
                let errorMessage = 'Error al cancelar el fondo.';
                if (error?.error) {
                    errorMessage = error.error;
                }
                this.errorMessage = errorMessage;
                alert(errorMessage);
            }
        });
    }

}