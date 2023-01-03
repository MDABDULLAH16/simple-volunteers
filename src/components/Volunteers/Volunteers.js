import React, { useState } from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";
import "./Volunteers.css";

const Volunteers = () => {
  const [volunteers] = useVolunteers();
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (event) => {
    const search = event.target.value;
    const searchResult = volunteers.filter((volunteer) =>
      volunteer.title.includes(search)
    );
    setSearchResult(searchResult);
  };

  return (
    <div>
      <h3>Volunteers:{volunteers.length}</h3>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="search"
        style={{ margin: "20px" }}
      />
      <div className="activity-container">
        {searchResult.map((volunteer) => (
          <Activity key={volunteer._id} volunteer={volunteer}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
