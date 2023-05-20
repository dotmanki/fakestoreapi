import React from 'react'
import { getAll, getById } from '../products'
import Image from 'next/image'
import './style.css'
import Label from '../../../../components/Label/Label'

interface Props {
  params: { id: string }
}

const ProductByid = async ({ params }: Props) => {
  const product = await getById(params.id)
  return (
    <main>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        priority
      />
      <div>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <Label>{product.category}</Label>
        <p>rate: {product.rating.rate}</p>
        <p>{product.description}</p>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const products = await getAll()

  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default ProductByid
