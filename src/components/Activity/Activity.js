import React from "react";
import "./Activity.css";

const Activity = ({ volunteer }) => {
  return (
    <div className="activity">
      <img width="100%" src={volunteer.img} alt="" />
      <h4>{volunteer.title}</h4>
    </div>
  );
};

export default Activity;
