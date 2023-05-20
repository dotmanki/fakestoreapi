import React from 'react'
import './Label.css'
interface Props {
  children: React.ReactNode
}
const Label = ({ children }: Props) => {
  return <span>{children}</span>
}

export default Label
