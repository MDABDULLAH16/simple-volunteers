import React from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";
import "./Volunteers.css";

const Volunteers = () => {
  const [volunteers] = useVolunteers();
  return (
    <div>
      <h3>Volunteers:{volunteers.length}</h3>
      <div className="activity-container">
        {volunteers.map((volunteer) => (
          <Activity key={volunteer._id} volunteer={volunteer}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
