import React, { useState } from "react";
import skillsStyles from "./Skills.module.css";
import photoShop from "../../../assets/images/Skills/adobe_photoshop.png";
import adobeIllustrator from "../../../assets/images/Skills/adobe_illustrator.png";
import adobeTarget from "../../../assets/images/Skills/adobe_target.png";
import adobeAnalytics from "../../../assets/images/Skills/adobe_analytics.png";
import googleAnalytics from "../../../assets/images/Skills/google_analytics.png";
import microsoftOffice from "../../../assets/images/Skills/Office_icon.png";
import HTMLSrc from "../../../assets/images/Skills/html_logo.png";
import CSSSrc from "../../../assets/images/Skills/css_logo.png";
import SASSSrc from "../../../assets/images/Skills/sass_logo.png";
import JSSrc from "../../../assets/images/Skills/javascript_logo.png";
import jQuerySrc from "../../../assets/images/Skills/jquery_logo.png";
import ReactSrc from "../../../assets/images/Skills/react_redux.png";

const initialState = [
  {
    img: { alt: "Adobe Photoshop", src: photoShop },
    title: "Adobe Photoshop",
  },
  {
    img: { alt: "Adobe Illustrator", src: adobeIllustrator },
    title: "Adobe Illustrator",
  },
  {
    img: { alt: "Adobe Target", src: adobeTarget },
    title: "Adobe Target",
  },
  {
    img: { alt: "Adobe Analytics", src: adobeAnalytics },
    title: "Adobe Analytics",
  },
  {
    img: { alt: "Google Analytics", src: googleAnalytics },
    title: "Google Analytics",
  },
  {
    img: { alt: "Microsoft Office", src: microsoftOffice },
    title: "Microsoft Office",
  },
  {
    img: { alt: "HTML", src: HTMLSrc },
    title: "HTML",
  },
  {
    img: { alt: "CSS", src: CSSSrc },
    title: "CSS",
  },
  {
    img: { alt: "SASS", src: SASSSrc },
    title: "SASS",
  },
  {
    img: { alt: "JavaScript", src: JSSrc },
    title: "JavaScript",
  },
  {
    img: { alt: "jQuery", src: jQuerySrc },
    title: "jQuery",
  },
  {
    img: { alt: "ReactJS + Redux", src: ReactSrc },
    title: "ReactJS + Redux",
  },
];

const Skills = ({ styles }) => {
  const [skills] = useState(initialState);
  return (
    <section id="skills" className={styles.section}>
      <span
        className={`${styles.icon} btn-floating btn-large deep-orange accent-3`}
      >
        <i className="material-icons">assessment</i>
      </span>
      <h2 className="deep-orange-text text-accent-3">Professional Skills</h2>
      <div className={`${styles["grid-container"]} ${styles["content"]} ${styles["skills"]} ${skillsStyles.skills}`}>
        {skills.map((skillItem) => {
          return (
            <div key={skillItem.title} className={styles["grid-item"]}>
              <div className={skillsStyles["skill-item"]}>
                <img
                  src={skillItem.img.src}
                  className={styles["circle"]}
                  alt={skillItem.img.alt}
                />
                <div className="title_value">{skillItem.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
