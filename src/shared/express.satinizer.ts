export const extractFile = (file: string, { req }: { req: any }) => {
 
    req.ext = file.match(/[^:/]\w+(?=;|,)/)![0]
    req.mimetype = file.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)![0]

  return file.split('base64,').pop()

}
