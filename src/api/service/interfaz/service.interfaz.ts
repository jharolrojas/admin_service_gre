// src/modules/service/interfaz/service.interfaz.ts
import { WhereOptions } from 'sequelize';
import { ServiceAttributes } from '../models/service.model';

export interface UpdateServicePayload {
  where: WhereOptions<ServiceAttributes>;
  payload: Partial<ServiceAttributes> & { updated_by: number };
}
