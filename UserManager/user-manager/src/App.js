import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/User/UserInput/UserInput";
import UserList from "./components/User/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: name,
        age: age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = <UserList users={users} />;
  }
  return (
    <React.Fragment>
      <UserInput onAddUser={addUserHandler} />

      {content}
    </React.Fragment>
  );
};
export default App;
