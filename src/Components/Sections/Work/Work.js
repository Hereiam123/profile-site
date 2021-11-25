import React, { useState } from "react";
import gasStation from "../../../assets/images/Works/gas-station.png";
import freeLance from "../../../assets/images/Works/freelance.png";
import hotelImage from "../../../assets/images/Works/hotel.png";
import rollerCoasterImage from "../../../assets/images/Works/roller-coaster.png";

const initialState = [
  {
    img: { alt: "Gas Pump Icon", src: gasStation },
    title: "Racetrac",
    jobTitle: "Shift Manager",
    workDate: "2014 - 2017",
  },
  {
    img: { alt: "Freelance Work Icon", src: freeLance },
    title: "Freelance Work",
    jobTitle: "Freelancer",
    workDate: "2016 - 2017",
  },
  {
    img: { alt: "Hotel Icon", src: hotelImage },
    title: "Westgate Resorts",
    jobTitle: "Front End and Test Engineer",
    workDate: "2017 - 2019",
  },
  {
    img: { alt: "Roller-coaster Icon", src: rollerCoasterImage },
    title: "Universal Orlando",
    jobTitle: "Senior Web Analyst and Implementation Engineer",
    workDate: "2019 - Present",
  },
]

const Work = ({ styles }) => {
  const [work] = useState(initialState);
  return (
    <section id="works" className={styles.section}>
      <span
        className={`${styles.icon} btn-floating btn-large light-green darken-3`}
      >
        <i className="material-icons">work</i>
      </span>
      <h2 className="light-green-text text-darken-3">Work experience</h2>
      <div className={`highlight ${styles["section-table"]}`}>
        <h3>Business Name / Department</h3>
        <h3>Date</h3>
        {work.map((workItem) => {
          return (
            <div key={workItem.title}>
              <img
                src={workItem.img.src}
                alt={workItem.img.alt}
                className="circle icon"
              />
              <p className="col2">{workItem.title}</p>
              <p className="col3">
                {workItem.jobTitle}
                <span className="light-green-text text-darken-3"></span>
              </p>
              <p className="col4">{workItem.workDate}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
