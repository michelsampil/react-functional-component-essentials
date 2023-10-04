import { useState, useEffect } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";

const url = "https://mocki.io/v1/2983a70b-6669-4ff7-ba1d-9e5ce0af358a";

const UserFinder = () => {
  // LOGIC
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    let data;
    try {
      const response = await fetch(url);
      data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log("Error: ", error);
    }
    return data;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const usersData = await fetchData();
      console.log("users: ", usersData);
      setFilteredUsers(
        usersData.filter((user) => user.name.includes(searchTerm))
      );
      setIsLoading(false);
    };
    fetchUsers();
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  // LOGIC END
  return (
    <>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      {!isLoading && <Users users={filteredUsers} />}
    </>
  );
};

export default UserFinder;
