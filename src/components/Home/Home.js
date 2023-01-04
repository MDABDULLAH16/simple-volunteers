import React, { useEffect, useState } from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";

const Home = () => {
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

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  // const handleSearchChange = (event) => {
  //   const search = event.target.value;
  //   const match = volunteers.filter((volunteer) =>
  //     volunteer.title.includes(search)
  //   );
  //   setSearchResult(match);
  // };

  return (
    <div>
      <h2>Volunteers Main Activities: {searchResult.length} </h2>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search hare"
      />
      <div className="activity-container">
        {searchResult.map((volunteer) => (
          <Activity key={volunteer._id} volunteer={volunteer}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Home;
