import React, { useState, useEffect } from "react";
import styles from "./cardDetails.module.css";
import { ToastContainer } from "react-toastify";
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";
import { StepThree } from "./stepThree";

let heading;

const CardDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          imageUrl: "",
          ticketQuantity: "1",
          ticketType: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const resetValues = () => {
    setFormData({
      fullName: "",
      email: "",
      mageUrl: "",
      ticketQuantity: "1",
      ticketType: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateTicketType = (type) => {
    setFormData({
      ...formData,
      ticketType: type,
    });
  };

  if (currentStep === 1) heading = "Ticket Selection";
  if (currentStep === 2) heading = "Attendee Details";
  if (currentStep === 3) heading = "Ready";

  return (
    <>
      <div className={styles.cardHeading}>
        <div className={styles.headingText}>
          <h3>{heading}</h3>
          <p>Step {currentStep}/3</p>
        </div>
        <div className={styles.line} />
      </div>

      {currentStep === 1 && (
        <StepOne
          form={formData}
          updateTicketType={updateTicketType}
          handleChange={handleChange}
          setCurrentStep={setCurrentStep}
          reset={resetValues}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          form={formData}
          handleChange={handleChange}
          setCurrentStep={setCurrentStep}
          setFormData={setFormData}
        />
      )}
      {currentStep === 3 && (
        <StepThree setCurrentStep={setCurrentStep} />
      )}
    </>
  );
};

export { CardDetails };
