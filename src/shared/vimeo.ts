import config from '../config/environments'
import path from 'path'
import { Vimeo } from 'vimeo'
import bytesize from 'byte-size'
import { writeFile } from 'fs/promises'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 50)
import https from 'https'
import axios from 'axios'
const fs = require('fs')


//Desarrollo daniel
// export const client = new Vimeo(
//   'c4998d1a944d6c600a18ee5047eaf308db308c96',
//   'TUTuk0cpj9dU/XIuvnWRe8vA194Rg9xSqfrrwVwZXEMoEQ4HWMoibvbuiV1Awy7YLK31sQWIeVu1bB/ItJMIsmgNLrlcfy33WNsrmMMGjlIi4AUd/sWAwij8VOqNV3+v',
//   'e86aea5a5a931e7d343b8e0a19fc75a3'
// )

// //Desarrollo
// export const client = new Vimeo(
//   '7b8aba384484a5cfea1d1291596e9c5f4409243a',
//   'NGt0G0bB5rcOFUUHo6/hxBF5JIXztIY++lbpJQDnIuFqNtZA2wN07zoREoGosX8sZ6FZ6wfFarws/xxrq02xddLoS3mJ3Ch+SC0yMUjtUEdF2sqKScXk2f/y7XBIkPTZ',
//   '3949214120361e2f63ca6d17f2b428eb'
// )

// produccion
export const client = new Vimeo(
  '4a20630b75aa95ad84044c73217fa9d2b0afdd28',
  'dHpChihmXbhgh81W29QLa2WJRFjJwx4UDe+j/pegPS94JObmJYOCFOQ/K5SFpOyMnQwsyQMMTpOsenYB8W/R42g/J156z8DEbBB9/xd0RSky/VjIWBZIknxdSgy07T9S',
  'bbf3cdb76a44bee74d57f361a0b2ca5e'
)

export interface IUploadVideo {
  size: string
  path: string
  key: string
  file_path: string
  uri: string
}

// (async ()=>{
//   const getMetadata = await axios.get(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/6627sadsa24803?h=983485274d`)

//   if(getMetadata.status == 200){
//     console.log(getMetadata.data)
//   }

// const getMetadata:any = await new Promise((resolve,reject)=>{
//   https.get(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/662795592`,(resp)=>{
//     let data:any = "" ;
//     let statusCode404 = { messageErrorWait:'wait' }
//     if(resp.statusCode == 404){
//       console.log("status code 404 - no hay resultados");
//       resolve(statusCode404)
//       return
//     }
//     resp.on("data", (chunk:any) => {
//       data += chunk;
//     });

//     resp.on("end", () => {
//       if(data.length == 0 || !(JSON.parse(data))){
//       console.log("no hay resultados");
//       resolve(statusCode404)
//     }
//       resolve(JSON.parse(data));
//     });
//   })
//   .on("error", (err:any) => {
//     reject("Error: " + err.message);
//   });
// })
// console.log(getMetadata)

//   const thumbnail = await new Promise((resolve,reject)=>{

//   client.request("/videos/662711414", function (error:any, body:any, statusCode:any, headers:any) {
//     if (error) {
//       reject(error)
//     }
//     console.log(body.pictures)
//     const find1080 = body?.pictures?.sizes.find((item:any) => item.height == 1080)
//     const thumbnail = !find1080 ? null : find1080.link
//     resolve(thumbnail)
//   })
// })

// })()

export const uploadVideo = ({
  vimeo,
  name,
  description,
}: {
  vimeo: Buffer
  name: string
  description: string
}) => {
  return new Promise<IUploadVideo>(async (resolve, reject) => {
    const file_path = path.join( ( await nanoid()) + '.mp4')
    await writeFile(file_path, vimeo)
    client.upload(
      file_path,
      {
        name: description,
        description: description, //? agregar al model
      },
      function (uri) {
        // console.log("uri",uri)
        const { value, unit } = bytesize(vimeo.byteLength)
        resolve({
          key: uri.split('/')[2],
          // path: 'https://vimeo.com/' + uri.split('/')[2],
          path: 'https://player.vimeo.com/video/' + uri.split('/')[2],

          size: value + unit,
          file_path,
          uri,
        })
      },
      function (bytes_uploaded, bytes_total) {
        var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2)
        // console.log(bytes_uploaded, bytes_total, percentage + '%')
      },
      function (err) {
        reject(err)
        
      }
    )
      fs.rm(file_path, { recursive: true }, () => {})

  })
}
export const deleteVideo = () => {
  return new Promise((resolve, reject) => {})
}
