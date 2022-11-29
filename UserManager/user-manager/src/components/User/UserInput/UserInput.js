import React, { useState, useRef } from "react";
import styles from "./UserInput.module.css";
import Card from "../../UI/Card/Card";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirm = () => {
    setErrorMessage("");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      return;
    } else if (enteredUserAge < 1) {
      setErrorMessage("Please enter a valid age (> 0).");
      return;
    } else {
      props.onAddUser(enteredUserName, enteredUserAge);
      nameInputRef.current.value = ""; // Rarely used, in senerios where you want to clear the input field after submit is clicked. Can also be done with useState().
      ageInputRef.current.value = ""; // Using refs like this manipulates the DOM directly, which is not recommended.
    }
  };

  return (
    <React.Fragment>
      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClick={handleConfirm}
          title="Invalid input"
        />
      )}
      <Card className={styles.form}>
        <form onSubmit={onSubmitHandler}>
          <label>Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label>Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <SubmitButton type="submit" displayText="Add User" />
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserInput;
