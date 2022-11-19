import React from "react";
import ReackDOM from "react-dom";

import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";
import SubmitButton from "../Buttons/SubmitButton";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <SubmitButton
          onClick={props.onClick}
          displayText="Okay"
          type="submit"
        />
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReackDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReackDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
