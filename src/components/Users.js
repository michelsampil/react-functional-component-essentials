import { useState, useEffect } from "react";
import User from "./User";
import classes from "./Users.module.css";
import { Card } from "./Card";

const Users = ({ users: usersProp }) => {
  const [showUsers, setShowUsers] = useState(true);
  const [users, setUsers] = useState(usersProp);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const onDeleteUser = (deletedUser) => {
    const filteredUsers = users.filter((user) => user.name !== deletedUser);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setUsers(usersProp);
  }, [usersProp]);

  const usersList = () => {
    return (
      <ul>
        {users.map((user) => (
          <Card>
            <User key={user.id} name={user.name} onDeleteUser={onDeleteUser} />
          </Card>
        ))}
      </ul>
    );
  };

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList()}
    </div>
  );
};

export default Users;
