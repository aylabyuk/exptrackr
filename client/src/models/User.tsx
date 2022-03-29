export interface User {
  username: string
  email: string
  avatar: string
}

export interface LoginResponse {
  token: string
  expires: string
}
