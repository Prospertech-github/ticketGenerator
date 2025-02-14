import React, { useState } from "react";
import styles from "./cardDetails.module.css"

let heading; 

const CardDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  if(currentStep === 1) heading = "Ticket Selection"
  if(currentStep === 2) heading = "Attendee Details"
  if(currentStep === 3) heading = "Ready"

  return (
    <>
        <div className={styles.cardHeading}>
            <div className={styles.headingText}>
              <h3>{heading}</h3>
              <p>Step {currentStep}/3</p>
            </div>
            <div className={styles.line}/>
        </div>

        {currentStep === 1 && <StepOne />}
    </> 
  )
};

export { CardDetails };


const StepOne = () =>{
    return(
        <div className={styles.stepOneCard}>
          <div className={styles.eventDetails}>
            <h2>Techember Fest ''25</h2>
            <p>Join us for an unforgettable experience at Tech Unwind! Secure your spot now.</p>
            <p>📍 Glory Dome <span>||</span> March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
    )
}
