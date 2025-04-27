export interface Transaccion {
    idTransaccion?: string; // Opcional al crear
    idCliente: string;
    idFondo: string;
    tipo: string; // "Apertura" o "Cancelación"
    monto: number;
    fecha: string;
    medioNotificacion: string; // "Email" o "SMS"
    descripcion: string;
  }