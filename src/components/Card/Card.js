import React from "react";
import styles from "./Card.scss";

const Card = (props) => (
  <div className={styles.component}>
    <p>{props.title}</p>
  </div>
);

export default Card;
