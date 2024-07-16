import sharp, { OutputInfo, PngOptions, ResizeOptions, Sharp, SharpOptions } from 'sharp'
interface IResizeImage {
  buffer: Buffer
  info: OutputInfo
}
export const resizeImageResize = ({
  file,
  resizeOptions,
  pngOptions,
}: {
  file: Buffer
  resizeOptions: ResizeOptions
  pngOptions: PngOptions
}): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    sharp(file,{ density:40 })
      .resize(resizeOptions)
      .png(pngOptions)
      .toBuffer((err: Error, buffer: Buffer, info: OutputInfo) => {
        if (err) {
          reject(err)
        } else {
          resolve(buffer)
        }
      })
  })
}
