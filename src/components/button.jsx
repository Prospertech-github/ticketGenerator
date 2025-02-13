import React from 'react'
import styles from "./button.module.css"

const NavButton = () => {
  return (
    <button className={styles.navbtn}>
        My Tickets &rarr;
    </button>
  )
}

export {NavButton}