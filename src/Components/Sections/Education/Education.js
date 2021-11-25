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
      <div className={`highlight ${styles["section-table"]}`}>
        <h3>Education Department</h3>
        <h3>Date</h3>
        <img src={collegePicture} alt="College Icon" className="circle icon" />
        <p className="col2">University of Central Florida</p>
        <p className="col3">
          College of Arts and Humanities
          <br />
          Digital Media-Web Design and Developement
        </p>
        <p className="col4">2007 - 2014</p>
      </div>
    </section>
  );
};

export default Education;
