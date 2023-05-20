import { IRoute } from '../models/route'

export const apiUrl = 'https://fakestoreapi.com/products'

export const routes: IRoute[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/products',
    label: 'Products',
  },
]
