import { writeFile } from 'fs/promises'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 50)
import path from 'path'
import config from '../config/environments/index'
import bytesize from 'byte-size'

export interface ISavaInServer {
  key: string
  path: string
  size: string
}
export const saveImageInServer = async ({
  buffer,
}: {
  buffer: Buffer
}): Promise<ISavaInServer> => {
  try {
    const key: string = `${await nanoid()}`
    const _path: string = path.join(config.DIR!, 'assets', key)
    const { value, unit } = bytesize(buffer.byteLength)
    await writeFile(_path, buffer)
    return { key, path: _path, size: value + unit }
  } catch (err) {
    throw err
  }
}
export const saveImageInServerV2 = async ({
  buffer,
}: {
  buffer: Buffer
}): Promise<ISavaInServer> => {
  try {
    const key: string = `${await nanoid()}`
    const _path: string = path.join(config.DIR!, 'assets', key)
    const { value, unit } = bytesize(buffer.byteLength)
    await writeFile(_path, buffer)
    return {
      key,
      path: config.PROY_BEURL + '/api/render-image/' + key,
      size: value + unit,
    }
  } catch (err) {
    throw err
  }
}
