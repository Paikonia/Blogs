import React from 'react'

type SkillCardProps = {
    title: string

}

const SkillsCard = ({ title }:SkillCardProps) => {
  return (
    <div className="feature-card__card">
        <div className="featured-card__content">
          <h4 className="feature-card__title">{title}</h4>
        </div>

    </div>
  )
}

export default SkillsCard