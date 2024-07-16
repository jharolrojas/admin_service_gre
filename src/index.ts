import Server from './api/server'
import config from './config/environments/index'
import { DataBase } from './database'
import  './schedulerTask'

const server = Server.init(Number(config.PORT))
server.start(() => {
  console.log('Server on fire ' + config.PORT)
  DataBase.instance
})
