import { Op } from 'sequelize'
import sequelize from 'sequelize'
import { DataBase } from '../../../../database'
import { TokenAttributes } from '../../models/token.model'

export const findTokenByUserId = async ({ userId }: { userId: number }): Promise<TokenAttributes> => {
  try {
    return (
      await DataBase.instance.token.findOne({
        where: {
          [Op.and]: {
            userId,
            state: true,
          },
        },
      })
    )?.get({ plain: true })!
  } catch (err) {
    throw err
  }
}
export const findTokenByUUID = async ({ uuid }: { uuid: string }): Promise<TokenAttributes> => {
  try {
    return (
      await DataBase.instance.token.findOne({
        where: {
          [Op.and]: {
            uuid,
            state: true,
          },
        },
      })
    )?.get({ plain: true })!
  } catch (err) {
    throw err
  }
}

export const gethoursOfUseInTheWeek = async ({ weekDate,yearDate ,monthDate}: { weekDate: any, yearDate:any,monthDate:any}) => {
  try {
    const data = await DataBase.instance.token.findAll({
      attributes:[
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(second,start_session, last_session)')),0
          ), 'seconds'
        ],
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(minute,start_session, last_session)')),0
           ) ,'minutes'
        ],
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(hour,start_session, last_session)')),0
           ),'hours'
        ]
      ],
      where:{
        rol:'user',
        [Op.and]:[
          // {
          // },
          sequelize.where(sequelize.fn('WEEK', sequelize.col('start_session')), weekDate),
          sequelize.where(sequelize.fn('YEAR', sequelize.col('start_session')), yearDate),
          sequelize.where(sequelize.fn('MONTH', sequelize.col('start_session')),monthDate)
          
        ]
      },
      // logging:console.log
    })
    
    return data; 
  } catch (err) {
    throw err
  }
}



export const gethoursOfUseInTheMonth = async ({ weekDate,yearDate ,monthDate}: { weekDate?: any, yearDate:any,monthDate:any}) => {
  try {
    const data = await DataBase.instance.token.findAll({
      attributes:[
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(second,start_session, last_session)')),0
          )
          , 'seconds'
        ],
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(minute,start_session, last_session)')),0
          ), 'minutes'
        ],
        [
          sequelize.fn('IFNULL',
          sequelize.fn('sum', sequelize.literal('TIMESTAMPDIFF(hour,start_session, last_session)')),0
          ), 'hours'
        ]
        
      ],
      where:{
        rol:'user',
        [Op.and]:[
        
          sequelize.where(sequelize.fn('YEAR', sequelize.col('start_session')), yearDate),
          sequelize.where(sequelize.fn('MONTH', sequelize.col('start_session')),monthDate)
          
        ]
      },
      // logging:console.log
    })
    return data; 
  } catch (err) {
    throw err
  }
}


export const getUseRegularFrecuencyReport = async (
  {startDate,finishDate}:
{
    startDate:any,
    finishDate:any,
}
  ) => {
  try {
    //reportUseRegularUse 
    const useFrecuencyReport = await DataBase.instance.token.findAll({
      attributes: [
        [sequelize.col('userId'),'id_user'],
        [sequelize.literal(`round(count(*)/cast(TIMESTAMPDIFF(day, '${startDate}' , '${finishDate}') as signed),2)`), 'day'],
        [sequelize.literal(`round(count(*)/(cast(TIMESTAMPDIFF(day, '${startDate}' , '${finishDate}') as signed)/7),2)`), 'week'],
        [sequelize.literal(`round(count(*)/(cast(TIMESTAMPDIFF(day, '${startDate}' , '${finishDate}') as signed)/30),2)`), 'month'],
        [sequelize.literal(`sec_to_time(sum(TIMESTAMPDIFF(second,start_session, last_session)))`),'usetime'],
        [sequelize.literal(`case 
        (
       select  actionId from metrics where actionId in(3,4) and userId = id_user
       and date between '${startDate}' and '${finishDate}'
        group by userId,actionId 
       order by count(actionId) desc limit 1
       ) 
       when 3 then "gestion de presupuestos"
       when 4 then "simulador"
       else ""
       end`),'componente']
        
      ],
      where:{
        rol:'user', // 4
        // state:true,
        start_session:{
          [Op.between]:[startDate,finishDate]
        }
      },
      group:['userId'],
      logging:console.log
    })
    
    // const count_total = await DataBase.instance.metrics.findAll({
    //   attributes: [[sequelize.fn('DISTINCT', sequelize.col('userId')), 'userId']],
    //   include:[
    //     {
    //       model:DataBase.instance.user,
          
    //     }
    //   ],
    //   where:{
    //     actionId,
    //     state:true,
    //     date:{
    //       [Op.between]:[startDate,finishDate]
    //     }
    //   },
      
    //   logging:console.log
    // })
    return useFrecuencyReport
  } catch (error) {
    throw error
  }
}
