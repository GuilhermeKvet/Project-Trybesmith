export interface Product {
  id?: number;
  name: string,
  amount: string,
}

export interface User {
  id?: number;
  username: string,
  classe?: string,
  level?: number,
  password: string
}

export interface Order {
  id?: number;
  userId?: number
}

export interface Token {
  id: number;
  username: string,
  iat?: number
}

export interface InsertOrder {
  id?: number;
  userId: number;
  productsIds: number[];
} 