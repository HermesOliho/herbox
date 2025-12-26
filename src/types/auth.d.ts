export interface Credentials {
  email: string
  password: string
}

export interface User {
  id: string
  name: string
  email: string
  createdAt?: string
  updatedAt?: string
}
