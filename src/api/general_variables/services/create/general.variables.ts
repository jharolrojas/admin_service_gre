import { DataBase } from '../../../../database/index'
import { GeneralVariablesAttributes } from '../../models/general.variables.model';
import { momentCustom } from '../../../../utils/moment';
import generateUUID from '../../../../utils/uuid';

export const createGeneralVariables = async (payload:GeneralVariablesAttributes) => {
    try {
        return await DataBase.instance.general_variables.create({
            created_date: momentCustom,
            status:true,
            id_code:generateUUID(),
            ...payload,
        })
        } catch (error) {
        throw error
    }
}


