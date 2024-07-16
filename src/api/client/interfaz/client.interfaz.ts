export interface UpdateClientPayload {
    where: { id: number };
    payload: {
        // name_p?: string;
        // name_s?: string;
        // lastname_m?: string;
        // lastname_p?: string;
        // number_document?: string;
        // type_document_id?: string;
        // email?: string;
        gender_id?: string;
        number_phone_1?: string;
        // number_phone_2?: string;
        address?: string;
        // birthdate?: string; // Debe cumplir con el formato 'YYYY-MM-DD'
        updated_by?: number | undefined;
        full_lastname:string;
        full_name:string;
    };
}
