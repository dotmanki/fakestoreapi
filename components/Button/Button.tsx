import React from 'react'
import './Button.css'

interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <button>{children}</button>
}

export default Button
