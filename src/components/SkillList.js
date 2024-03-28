import React from "react";

export const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
};

export const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" color="blue" />
      <Skill name="JavaScript" color="orange" />
      <Skill name="Web Design" color="yellow" />
      <Skill name="React" color="orangered" />
    </div>
  );
};
