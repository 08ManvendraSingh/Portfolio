import React from "react";

const ProjectCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div className="cardBox">
      <div className="imgBox">
        <img src={img} alt="" className="" />
      </div>
      <div className="contentBox">
        <h2 className="">{name}</h2>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
