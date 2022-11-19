import React, { useState } from "react";
import styles from "./UserInput.module.css";
import Card from "../../UI/Card/Card";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import ErrorModule from "../../UI/ErrorModule/ErrorModule";
const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState();

  
  const handleOkay = () => {
    console.log("Okay clicked");
    setShowError(false);
    setErrorMessage("");
  };

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setErrorMessage("Please enter a valid name and age (non-empty values).");
        setShowError(true);
        return
      } else if (enteredAge < 1) {
        setErrorMessage("Please enter a valid age (> 0).");
        setShowError(true);
        return
    } else {

      
        props.onAddUser(enteredName, enteredAge);
        setEnteredName("");
        setEnteredAge("");
  };
  };
  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {showError && (<ErrorModule message={errorMessage} onClick={handleOkay} title="Invalid input" />)}
      <Card className={styles.form}>
        <form onSubmit={OnSubmitHandler}>
        <label>Username</label>
        <input type="text" value={enteredName} onChange={handleNameChange} />
        <label>Age (years)</label>
        <input type="number" value={enteredAge} onChange={handleAgeChange} />
        <SubmitButton type="submit" displayText="Add User" />
    </form>
      </Card>
    </div>
      
  );
};

export default UserInput;
