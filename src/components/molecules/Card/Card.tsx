import React from "react"
import "./Card.css"
import { CardProps } from "./"

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  description,
}) => (
  <div className={`assignment-card ${className}`}>
    <div className="assignment-card-header">
      <h3 className="assignment-card-header-title">{title}</h3>
      {description && (
        <p className="assignment-card-header-description">{description}</p>
      )}
    </div>
    <div className="assignment-card-body">
      <dl className="assignment-card-body-data-list">{children}</dl>
    </div>
  </div>
)

export const CardItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="assignment-card-item">
      <dt className="assignment-card-item-label">{title}</dt>
      <dd className="assignment-card-item-value">{children}</dd>
    </div>
  )
}
export default Card
