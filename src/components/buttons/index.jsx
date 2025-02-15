import React from "react";
import styles from "./button.module.css";

const NavButton = () => {
  return <button className={styles.navbtn}>My Tickets &rarr;</button>;
};

const FormButtons = ({ label, primary, onClick }) => {
  return (
    <button
      className={`${styles.formBtn} ${primary ? styles.primaryBtn : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { NavButton, FormButtons };
