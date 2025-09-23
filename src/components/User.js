import classes from "./User.module.css";

const User = ({ name, onDeleteUser }) => {
  const onClickHandler = () => {
    onDeleteUser(name);
  };

  return (
    <li className={classes.user}>
      <span>{name}</span>
      <button onClick={() => onClickHandler()}>Clear 🧹</button>
    </li>
  );
};

export default User;
