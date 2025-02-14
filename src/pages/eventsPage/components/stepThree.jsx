import React, { useEffect, useState } from "react";
import { Barcodes } from "../../../assets";
import { FormButtons } from "../../../components";
import styles from "./stepThree.module.css";

const StepThree = ({setCurrentStep}) => {
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
                  <p className={styles.detailtag}>Name:</p>
                  <p>{userDetails?.fullName}</p>
                </div>

                <div className={styles.box2}>
                  <p className={styles.detailtag}>Email:</p>
                  <p>{userDetails?.email}</p>
                </div>

                <div className={styles.box3}>
                  <p className={styles.detailtag}>Ticket Type:</p>
                  <p>{userDetails?.ticketType}</p>
                </div>

                <div className={styles.box4}>
                  <p className={styles.detailtag}>Ticket for:</p>
                  <p>{userDetails?.ticketQuantity}</p>
                </div>
                <div className={styles.box5}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clipThree}>
          <div className={styles.clipFour}>
            <img src={Barcodes} alt="" />
          </div>
        </div>
      </div>

      <section className={styles.btnDiv}>
        <FormButtons
          label="Book Another Ticket"
          onClick={() => {
            localStorage.removeItem('formData')
            setCurrentStep(1)
          }}
        />
        <FormButtons label="Download Ticket" primary  />
      </section>
    </div>
  );
};

export { StepThree };
