// Suponiendo que `TicketAttributes` está definido como sigue:
export interface TicketAttributes {
    id?: number;
    client_id?: number;
    service_id?: string;
    technical_id?: number;
    hour?: string;
    date?: string;
    how_long?: string;
    service_status_id?: string;
    amount?: string;
    status_payment_id?: string;
    type_payment_id?: string;
    status?: boolean;
    updated_by:number;
    description:string;
  }
  
  // Definición de la interfaz para el payload de actualización
  export interface UpdateTicketPayload {
    where: { id: number }; // Condición para la actualización
    payload: Partial<TicketAttributes>; // Solo los campos que pueden ser actualizados parcialmente
  }
  