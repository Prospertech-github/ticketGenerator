import React, { useEffect, useState } from "react";
import styles from "./stepThree.module.css";

const StepThree = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    let form = JSON.parse(localStorage.getItem("formData"));
    setUserDetails(form);
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
                  <img src={userDetails.imageUrl} alt="Ticket QR Code" />
                ) : (
                  <p>Loading image...</p>
                )}
              </div>

              <div className={styles.gridBox}>
                <div className={styles.box1}>
                  <p>Name:</p>
                  <p>{userDetails?.fullName}</p>
                </div>
                <div className={styles.box2}>
                  <p>Email:</p>
                  <p>{userDetails?.email}</p>
                </div>
                <div className={styles.box3}>
                  <p>Ticket Type:</p>
                  <p>{userDetails?.ticketType}</p>
                </div>
                <div className={styles.box4}>
                  <p>Ticket for:</p>
                  <p>{userDetails?.ticketQuantity}</p>
                </div>
                <div className={styles.box5}></div>
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
