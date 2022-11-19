import React from 'react';

import Card from '../Card/Card';
import classes from './ErrorModule.module.css';
import SubmitButton from '../Buttons/SubmitButton';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <SubmitButton onClick={props.onClick} displayText="Okay" type="submit"/>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;