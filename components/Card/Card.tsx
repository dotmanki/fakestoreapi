import Image from 'next/image'
import React from 'react'
import './Card.css'
import Button from '../Button/Button'
import Link from 'next/link'

interface Props {
  imgSrc: string
  title: string
  subtitle: string
  description: string
  href: string
}

const Card = ({ imgSrc, title, subtitle, description, href }: Props) => {
  return (
    <div className="card-container">
      <Image
        src={imgSrc}
        alt={title}
        width={200}
        height={200}
      />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className="card-button">
        <Link href={href}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
