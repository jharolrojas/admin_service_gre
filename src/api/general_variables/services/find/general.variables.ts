import { DataBase } from '../../../../database'
import { GeneralVariablesAttributes } from '../../models/general.variables.model'
import { Op } from 'sequelize';

export const getListGeneralVariablesService = async ({
  order,
  page,
  limit,
  search
}: {
  order: string,
  page: number,
  limit: number,
  search: string
}) => {
  try {
    const offset: number = (page - 1) * limit;

    const { count, rows } = await DataBase.instance.general_variables.findAndCountAll({
      where: {
        value: {
          [Op.like]: `%${search}%` // Utiliza Sequelize Op.like para el operador SQL LIKE
        },
        ref1: {
          [Op.like]: `%${search}%` // Utiliza Sequelize Op.like para el operador SQL LIKE
        },
        ref2: {
          [Op.like]: `%${search}%` // Utiliza Sequelize Op.like para el operador SQL LIKE
        },
        ref3: {
          [Op.like]: `%${search}%` // Utiliza Sequelize Op.like para el operador SQL LIKE
        },
         ref4: {
          [Op.like]: `%${search}%` // Utiliza Sequelize Op.like para el operador SQL LIKE
        }
      },
      order: [['created_date', order]],
      limit,
      offset,
    });

    return { page, count, rows };
  } catch (err) {
    throw err;
  }
};

export const findGeneralVariablesByIdCode = async (
  { id_code }: { id_code: number }
): Promise<GeneralVariablesAttributes> => {
  try {
    return (
      await DataBase.instance.general_variables.findOne({
        where: {
          id: id_code,
        },
      })
    )?.get({ plain: true })!
  } catch (err) {
    throw err
  }
}




