import { apiUrl } from '../../../shared/constants'
import { Product } from '../../../models/product.model'

export const getAll = async (): Promise<Product[]> => {
  const res = await fetch(apiUrl, { cache: 'force-cache' })
  return res.json()
}

export const getMostRated = async (): Promise<Product[]> => {
  const res = await getAll()

  return res.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5)
}

export const getById = async (id: string): Promise<Product> => {
  const res = await fetch(`${apiUrl}/${id}`)
  return res.json()
}
