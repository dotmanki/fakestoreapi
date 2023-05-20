'use client'

import React, { MouseEventHandler, useCallback, useState } from 'react'
import { Product } from '../../models/product.model'
import Image from 'next/image'
import './Table.css'
import Link from 'next/link'

type SortKeys = keyof Pick<Product, 'title' | 'price'>

type SortOrder = 'asc' | 'desc'

interface Header {
  key: SortKeys | 'action' | 'image'
  label: string
  sortable?: boolean
}

const headers: Header[] = [
  { key: 'image', label: 'Image' },
  { key: 'title', label: 'Name', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'action', label: 'Action' },
]

interface SortBtnProps {
  sortOrder: SortOrder
  columnKey: SortKeys
  sortKey: SortKeys
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const SortButton = ({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
  children,
}: SortBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === 'desc'
          ? 'sort-button sort-reverse'
          : 'sort-button'
      }`}
    >
      {children}
    </button>
  )
}

const sortData = ({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Product[]
  sortKey: SortKeys
  reverse: boolean
}) => {
  if (!sortKey) return tableData

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })

  if (reverse) {
    return sortedData.reverse()
  }

  return sortedData
}

const Table = ({ data }: { data: Product[] }) => {
  const [sortKey, setSortKey] = useState<SortKeys>('title')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setSortKey(key)
  }

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === 'desc' }),
    [data, sortKey, sortOrder]
  )

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            if (!row.sortable || row.key === 'action' || row.key === 'image')
              return <td key={row.key}>{row.label}</td>

            return (
              <td key={row.key}>
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key as SortKeys)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                >
                  {row.label}
                </SortButton>
              </td>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map((product) => {
          return (
            <tr key={product.id}>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link href={`/products/${product.id}`}>Details</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
