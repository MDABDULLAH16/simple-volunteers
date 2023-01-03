import React, { useEffect, useState } from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";
import "./Volunteers.css";

const Volunteers = () => {
  // const [volunteers] = useVolunteers();
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const match = data.filter((data) => data.title.includes(searchText));
        setSearchResult(match);
      });
  }, [searchText]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  // const handleSearch = (event) => {
  //   const search = event.target.value;
  //   const searchResult = volunteers.filter((volunteer) =>
  //     volunteer.title.includes(search)
  //   );
  //   setSearchResult(searchResult);
  // };

  return (
    <div>
      <h3>Volunteers:{searchResult.length}</h3>
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
