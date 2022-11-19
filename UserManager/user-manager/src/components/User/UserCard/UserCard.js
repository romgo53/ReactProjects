import React from 'react';
import Card from '../../UI/Card/Card';
import styles from './UserCard.module.css';


const UserCard = (props) => {
    const ageText = () => `(${props.age} years old)`
    return (
            <p className={styles.text}>{props.name} {ageText()}</p>
    );
}

export default UserCard;