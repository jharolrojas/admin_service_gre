export interface UpdateUserPayload {
    name_p?: string;
    name_s?: string;
    lastname_m?: string;
    lastname_p?: string;
    number_document?: string;
    type_document_id?: string;
    email?: string;
    gender_id?: string;
    number_phone_1?: string;
    number_phone_2?: string;
    address?: string;
    birthdate?: string;
    salary?: string;
    level_id?: string;
    rol_id?: string;
    status?: string;
    state?:boolean
    updated_by?: number;
  }
  
  export interface UpdateUserRequest {
    where: {
      id: number;
    };
    payload: UpdateUserPayload;
  }
  