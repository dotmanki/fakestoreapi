import React from 'react'
import { getAll } from './products'
import './Products.css'
import Table from '../../../components/Table/Table'

const Products = async () => {
  const products = await getAll()
  return (
    <>
      <h1>Products</h1>
      <main>
        <Table data={products}></Table>
      </main>
    </>
  )
}

export default Products
