import React from "react";

export type SkillCardProps = {
  title: string;
  description: string;
  Proficiency: string;
};

const SkillsCard = ({ title, description, Proficiency }: SkillCardProps) => {
  return (
    <div className="feature-card__card p-4">
      <div className="featured-card__content flex-row flex justify-between">
        <h4>{title}</h4>
        <p>Proficiency: {Proficiency}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillsCard;
