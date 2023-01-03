import React from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";

const Home = () => {
  const [volunteers] = useVolunteers();
  return (
    <div>
      <h2>Volunteers Main Activities: {volunteers.length} </h2>
      <div className="activity-container">
        {volunteers.map((volunteer) => (
          <Activity key={volunteer._id} volunteer={volunteer}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Home;
