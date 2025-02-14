import React from 'react'
import styles from './stepThree.module.css'

const StepThree = () => {
  return (
    <div>
        <div className={styles.heading}>
            <h2>Your Ticket Is Booked!</h2>
            <p>Check your email for a copy you can download</p>
        </div>

        <div className={styles.ticketContainer}>
            <div className={styles.clipOne}>
                <div className={styles.clipTwo}>

                </div>
            </div>
            <div className={styles.clipThree}>
                <div className={styles.clipFour}>

                </div>
            </div>
        </div>
    </div>
  )
}

export {StepThree}