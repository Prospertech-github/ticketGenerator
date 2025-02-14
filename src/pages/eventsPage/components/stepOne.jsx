import { FormButtons } from "../../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./cardDetails.module.css";

const tickets = [
  {
    type: "REGULAR ACCESS",
    cost: 0,
    amountLeft: 20,
  },
  {
    type: "VIP ACCESS",
    cost: 50,
    amountLeft: 20,
  },
  {
    type: "VVIP ACCESS",
    cost: 150,
    amountLeft: 20,
  },
];

const StepOne = ({
  form,
  updateTicketType,
  handleChange,
  setCurrentStep,
  reset,
}) => {
  const validateInput = () => {
    if (!form.ticketType) {
      toast.error("Please select a ticket type before proceeding.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      setCurrentStep(2);
    }
  };

  return (
    <div className={styles.stepOneCard}>
      <div className={styles.eventDetails}>
        <h2>Techember Fest ''25</h2>
        <p>
          Join us for an unforgettable experience at Tech Unwind! Secure your
          spot now.
        </p>
        <p>
          📍 Glory Dome <span>||</span> March 15, 2025 | 7:00 PM
        </p>
      </div>

      <div className={styles.stepLine} />

      <section className={styles.ticketType}>
        <p>Select Ticket Type:</p>
        <div className={styles.typeSelection}>
          {tickets.map((ticket, index) => (
            <div
              className={`${styles.ticketSelect} ticketType`}
              key={index}
              onClick={() => {
                updateTicketType(ticket.type);
              }}
            >
              <div className={styles.ticketDetails}>
                <h3>{ticket.type}</h3>
                <p>{ticket.amountLeft} left!</p>
              </div>
              <div className={styles.ticketPrice}>
                <p>{ticket.cost === 0 ? "Free" : `$${ticket.cost}`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ticketNum}>
        <p>Number of Tickets: </p>

        <div>
          <select
            className={styles.ticketQuantity}
            value={form.ticketQuantity || ""}
            name="ticketQuantity"
            onChange={(e) => handleChange(e)}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className={styles.btnDiv}>
        <FormButtons
          label="Cancel"
          onClick={() => {
            toast.info("Ticket generation cancelled");
            reset();
          }}
        />
        <FormButtons label="Next" primary onClick={handleNext} />
      </section>
    </div>
  );
};

export {StepOne}
