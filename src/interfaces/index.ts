export interface IJsonRecommend {
  email: string
  rol: number
  url_log?:string

}
export interface ITemplate {
  redirect_buttom?: string
  names?: string
  banner?: string
  code?: string
  password?: string
  url_log?:string
}
export interface ITemplateOffer {
  title?: string
  banner?: string
  description?: string
  url_log?:string
}
export interface ITemplateEmailWait {
  name?: string
  banner?: string
  count?: number
  url_log?:string
}
