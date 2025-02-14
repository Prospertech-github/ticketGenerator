import React, { useEffect, useState } from "react";
import styles from "./stepThree.module.css";

const StepThree = () => {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    let form = JSON.parse(localStorage.getItem("formData"));
    console.log(form)
    setUserDetails(form.imageUrl);
    
  }, []);
  return (
    <div>
      <div className={styles.heading}>
        <h2>Your Ticket Is Booked!</h2>
        <p>Check your email for a copy you can download</p>
      </div>

      <div className={styles.ticketContainer}>
        <div className={styles.clipOne}>
          <div className={styles.clipTwo}>
            <div className={styles.ticketDetails}>
              <h3> Techember Fest ''25</h3>
              <p>📍 Glory Dome, Lagos</p>
              <p> 📅 March 17, 2025 || 7:00 PM</p>

              <div className={styles.imgHolder}>
                {userDetails ? (
                  <img src={userDetails} alt="Ticket QR Code" />
                ) : (
                  <p>Loading image...</p>
                )}
              </div>

              <div className={styles.gridBox}>
                <div id="box1">

                </div>
                <div id="box2">

                </div>
                <div id="box3">

                </div>
                <div id="box4">

                </div>
                <div id="box5">
                    
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.clipThree}>
          <div className={styles.clipFour}></div>
        </div>
      </div>
    </div>
  );
};

export { StepThree };
