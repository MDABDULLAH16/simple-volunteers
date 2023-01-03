import React from "react";

const Activity = ({ volunteer }) => {
  return (
    <div>
      <img width="200px" src={volunteer.img} alt="" />
      <h4 style={{ "margin-top": "0" }}>{volunteer.title}</h4>
    </div>
  );
};

export default Activity;
