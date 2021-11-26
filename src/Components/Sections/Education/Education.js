import React from "react";
import collegePicture from "../../../assets/images/Education/college.png";

const Education = ({ styles }) => {
  return (
    <section id="education" className={styles.section}>
      <span className={`${styles.icon} btn-floating btn-large white`}>
        <i className="material-icons cyan-text text-darken-2">
          account_balance
        </i>
      </span>
      <h2 className="cyan-text text-darken-2">Education</h2>
      <div className={`${styles["grid-container"]} ${styles["header"]}`}>
        <div className={styles["grid-item"]}></div>
        <div className={styles["grid-item"]}></div>
        <div className={styles["grid-item"]}>
          <h3>Education Department</h3>
        </div>
        <div className={styles["grid-item"]}>
          <h3>Date</h3>
        </div>
      </div>
      <div className={`${styles["grid-container"]} ${styles["content"]}`}>
        <div className={styles["grid-item"]}>
          <img
            src={collegePicture}
            alt="College Icon"
            className={`${styles["circle"]} ${styles["icon"]}`}
          />
        </div>
        <div className={styles["grid-item"]}>
          <p>University of Central Florida</p>
        </div>
        <div className={styles["grid-item"]}>
          <p>
            College of Arts and Humanities
            <br />
            Digital Media-Web Design and Developement
          </p>
        </div>
        <div className={styles["grid-item"]}>
          <p>2007 - 2014</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
