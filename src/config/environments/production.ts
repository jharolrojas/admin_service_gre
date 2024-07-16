export interface Production {
  PORT?: string
  PORT2?: string
  MODE?: string
  PROY_BD?: string
  PROY_BD2?: string
  PROY_BD_HOST?: string
  PROY_BD_USER?: string
  PROY_BD_PASS?: string
  PROY_BD_PORT?: string
  SECRET_HIDDEN_KEY?: string
  SEND_TRANSPORTER?: string
  SENDER?: string
  SENDER_PASS?: string
  SENDER_ALIAS?: string
  DIR?: string
  CLIENT_ID?: string
  SENDGRID_KEY?: string
  PROY_BEURL?: string
  PROY_FEURL?: string
  PROY_EXTERNAL?: string
  DIR_ASSETS?: string
  ONE_SIGNAL_APP_ID?: string
  ONE_SIGNAL_API_KEY?: string
  S3_ACCESS_KEY_ID?: string
  S3_SECRET_ACCESS_KEY?: string
  S3_ENDPOINT_URL?: string
  S3_BUCKET_NAME?: string
  URL_LOGO?: string
}
export const production: Production = {
  MODE: process.env.NODE_ENV,
  PORT: process.env.PROY_APP_PORT,
  PORT2: process.env.PROY_APP_PORT2,
  PROY_BD: process.env.PROY_BD,
  PROY_BD2: process.env.PROY_BD2,
  PROY_BD_HOST: process.env.PROY_BD_HOST,
  PROY_BD_USER: process.env.PROY_BD_USER,
  PROY_BD_PASS: process.env.PROY_BD_PASS,
  PROY_BD_PORT: process.env.PROY_BD_PORT,
  SECRET_HIDDEN_KEY: process.env.SECRET_HIDDEN_KEY,

  SEND_TRANSPORTER: process.env.SEND_TRANSPORTER,
  SENDER: process.env.SENDER,
  SENDER_PASS: process.env.SENDER_PASS,
  SENDER_ALIAS: process.env.SENDER_ALIAS,
  SENDGRID_KEY: process.env.SENDGRID_KEY,

  PROY_BEURL: process.env.PROY_BEURL,
  PROY_FEURL: process.env.PROY_FEURL,
  PROY_EXTERNAL: process.env.PROY_EXTERNAL,

  ONE_SIGNAL_APP_ID: process.env.ONE_SIGNAL_APP_ID,
  ONE_SIGNAL_API_KEY: process.env.ONE_SIGNAL_API_KEY,


  S3_ACCESS_KEY_ID:  process.env.S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  URL_LOGO: process.env.URL_LOGO,
}
