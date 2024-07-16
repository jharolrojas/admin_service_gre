// import { createVideoController } from '../api/company/controllers/informationCompany.controllers'
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const { Mutex } = require('async-mutex')

const totalChunks = 10

const storage = multer.diskStorage({
  destination: (req: { query: { username: any } }, file: any, cb: (arg0: null, arg1: any) => void) => {
    // Utilizar el nombre de usuario proporcionado en la consulta
    const userDir = path.join(__dirname, 'uploads', req.query.username)
    fs.mkdirSync(userDir, { recursive: true })
    cb(null, userDir)
  },
  filename: (req: any, file: { originalname: any }, cb: (arg0: null, arg1: any) => void) => {
    cb(null, file.originalname)
  },
})

export const upload = multer({ storage })

const mutex = new Mutex()

export const videoChunks = async (req: any, res: any, next: any) => {
  const chunkPath = path.join(__dirname, 'uploads', req.query.username, req.file.filename)
  let targetStream: any

  try {
    await mutex.runExclusive(async () => {
      targetStream = fs.createWriteStream(
        path.join(__dirname, 'uploads', req.query.username, req.query.filename),
        { flags: 'a' }
      )

      const readStream = fs.createReadStream(chunkPath)
      readStream.pipe(targetStream)

      readStream.on('end', async () => {
        if (+req.body.chunk_number === totalChunks) {
          const combineDirectoriPath = path.join(__dirname, 'uploads', req.query.username)
          const combinedVideoPath = path.join(combineDirectoriPath, `${req.query.filename}`)

          const videoData = fs.readFileSync(combinedVideoPath)
          fs.rm(combinedVideoPath, { recursive: true }, () => {})
          req.body.video = videoData
          // createVideoController(req, res, next)

          // callConvertidor(req, res, next)

          fs.rm(combineDirectoriPath, { recursive: true }, () => {})
        } else {
          res.sendStatus(200)
        }
      })
      // const callConvertidor = (req:any, res:any, next:any) => {
      // }
    })
  } catch (error) {
    console.error('Error al crear el flujo de escritura:', error)
    res.sendStatus(500)
  }
}
