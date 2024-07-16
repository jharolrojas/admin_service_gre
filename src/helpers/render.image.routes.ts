import { Request, Response } from 'express'
import config from '../config/environments'

import path from 'path'
import fs from 'fs/promises'
import { NextFunction } from 'express'
import { DataBase } from '../database'

export const renderImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _path: string = path.join(config.DIR!, 'assets', req.params.image)
    const data: Buffer = await fs.readFile(_path)
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(data)
  } catch (err) {
    res.status(404).json('Not Found')
  }
}



