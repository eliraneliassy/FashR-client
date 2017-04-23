export interface UserLoginModel{
    user: string,
    password: string
}

export interface UserRegisterModel{
    firstName: string,
    lastName: string,
    email:string,
    password:string,
    confirmPassword: string
}

export interface SocailUserRegisterModel{
    displayName : string,
    email : string,
    photoUrl: string,
    userName: string,
    providerId : number
}