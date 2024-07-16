import sequelize, { Op } from 'sequelize'
import cron from 'node-cron'
// import { sendEmailWait } from './api/jobs/services/create/job'
// import { finishJob } from './api/jobs/services/update/job'
;(async () => {
  console.log('cron init')
  // cron.schedule(
  //   ' 00 8 * * *',
  //   async () => {
  //     sendEmailWait()
  //   },
  //   {
  //     scheduled: true,
  //     timezone: 'America/Lima',
  //   }
  // )

  // cron.schedule(
  //   '00 18 * * *',
  //   async () => {
  //     sendEmailWait()
  //   },
  //   {
  //     scheduled: true,
  //     timezone: 'America/Lima',
  //   }
  // )
  // cron.schedule(
  //   ' 00 1 * * *',
  //   async () => {
  //     finishJob()
  //   },
  //   {
  //     scheduled: true,
  //     timezone: 'America/Lima',
  //   }
  // )
})
// () //OFF
