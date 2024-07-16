export interface ISignIn {
    email: string
    password: string
    postulations: boolean
}

export interface JwtPayload {
    _id: string
}
export interface IToken {
    userId: number
}