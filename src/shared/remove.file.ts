import fs from 'fs'
export const removeFile = ({ path }: { path: string }): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err: any) => {
      if (err) resolve('No se elimino el File')
      resolve('Se elimino el File')
    })
  })
}
