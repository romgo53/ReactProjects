import React from "react";
import styles from "./UserList.module.css";
import UserCard from "../UserCard/UserCard";
import Card from "../../UI/Card/Card";

const UserList = (props) => {
  return (
    <Card className={styles.list}>
      {props.users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </Card>
  );
};

export default UserList;