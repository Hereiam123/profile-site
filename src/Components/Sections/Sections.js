import React from "react";
import styles from "./Sections.module.css";
import Education from "./Education/Education";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact"

const Sections = () => {
  return (
    <>
      <Education styles={styles} />
      <Work styles={styles} />
      <Skills styles={styles} />
      <Services styles={styles} />
      <Contact styles={styles} />
    </>
  );
};

export default Sections;
