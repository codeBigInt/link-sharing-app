import React from 'react'

type CardProps = {
    className?: string
    children: React.ReactNode
    style?: React.CSSProperties
}

const Card = ({children, className}: CardProps) => {
  return (
    <div className={`${className} shadow-sm rounded-lg p-6 w-full`}>
      {children}
    </div>
  )
}

export default Card
