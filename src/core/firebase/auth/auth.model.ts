export enum ResponseType {
    success = 'success',
    failure = 'failure'
}

export interface AuthResponse {
    status: ResponseType;
    token?: string
    uid: string | undefined
    message: string | undefined
}

export enum AuthAction {
    Login = "Login",
    Register = "Register"
}
