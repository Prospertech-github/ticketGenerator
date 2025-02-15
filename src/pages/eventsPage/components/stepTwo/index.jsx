import { useEffect, useState } from "react";
import { FormButtons } from "../../../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./stepTwo.module.css";
import axios from "axios";

const StepTwo = ({ form, handleChange, setCurrentStep, setFormData}) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const validateInput = () => {
    if (!form.fullName) {
      toast.error("Please input your full name before proceeding");
      return false;
    }
    if (!form.email) {
      toast.error("Please input your email before proceeding");
      return false;
    }
    if (!image) {
      toast.error("Please input an image before proceeding");
      return false;
    }
    return true;
  };

  useEffect(()=>{
    async function convertImagetoUrl() {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "zbg4mam7");
  
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/prosper99/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Image uploaded successfully!");
        setImageUrl(response.data.secure_url);
        setFormData({
          ...form, 
          imageUrl: response.data.secure_url
        })
      } catch (error) {
        console.error(
          "Error uploading image:",
          error.response?.data || error.message
        );
        toast.error("Image upload failed. Please try again.");
      }
    }
    if(image) convertImagetoUrl();
  }, [image])

  const handleNext = () => {
    if (validateInput()) {
      setCurrentStep(3);;
    }
  };

  return (
    <div className={styles.stepOneCard}>
      <div className={styles.avatarCard}>
        <p>Upload Profile Photo</p>

        <div className={styles.avatarInput}>
          <div className={styles.uploadBox}>
            {imageUrl ? (
              <div className={styles.uploadedImage}>
                <img src={imageUrl} alt="User Avatar" />
              </div>
            ) : (
              <div>
                <label htmlFor="fileUpload" className={styles.uploadLabel}>
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.uploadIcon}
                  >
                    <path
                      d="M23.2639 8.81596C22.6812 4.22663 18.7505 0.666626 14.0052 0.666626C10.3305 0.666626 7.13854 2.81463 5.68121 6.19996C2.81721 7.05596 0.671875 9.75996 0.671875 12.6666C0.671875 16.3426 3.66254 19.3333 7.33854 19.3333H8.67188V16.6666H7.33854C5.13321 16.6666 3.33854 14.872 3.33854 12.6666C3.33854 10.7946 4.93721 8.99063 6.90254 8.64529L7.67721 8.50929L7.93321 7.76529C8.87054 5.03063 11.1972 3.33329 14.0052 3.33329C17.6812 3.33329 20.6719 6.32396 20.6719 9.99996V11.3333H22.0052C23.4759 11.3333 24.6719 12.5293 24.6719 14C24.6719 15.4706 23.4759 16.6666 22.0052 16.6666H19.3385V19.3333H22.0052C24.9465 19.3333 27.3385 16.9413 27.3385 14C27.337 12.8047 26.9347 11.6444 26.196 10.7046C25.4574 9.76486 24.425 9.09987 23.2639 8.81596Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M15.3385 12.6666V7.33329H12.6719V12.6666H8.67188L14.0052 19.3333L19.3385 12.6666H15.3385Z"
                      fill="#FAFAFA"
                    />
                  </svg>

                  <p>Drag & drop or click to Upload</p>
                </label>
                <input
                  id="fileUpload"
                  className={styles.fileUpload}
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.stepLine} />

      <section className={styles.formArea}>
        <div className={styles.inputDiv}>
          <label htmlFor="fullName"> Enter your name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Gbadebo Rhodes"
            value={form.fullName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="email"> Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="hello@avioflagos.io"
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="remarks"> About the project</label>
          <textarea
            name="remarks"
            id="remarks"
            placeholder="What is/are your concern(s) about the event"
          ></textarea>
        </div>
      </section>

      <section className={styles.btnDiv}>
        <FormButtons
          label="Back"
          onClick={() => {
            setCurrentStep(prev => prev - 1)
          }}
        />
        <FormButtons label="Get My Free Ticket" primary onClick={handleNext} />
      </section>
    </div>
  );
};

export { StepTwo };
