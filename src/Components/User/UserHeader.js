import React from "react";
import styles from "./UserHeader.module.css";
import ReactTooltip from "react-tooltip";

const UserHeader = () => {
  return (
    <header className="dark-bg">
      <div id="homeMobile">
      <ul className={styles["social-links"]}>
        <li>
          <a
            href="https://www.linkedin.com/in/briandemaio"
            className="tooltipped"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <ReactTooltip id="LinkedIn" place="top" effect="solid">
            LinkedIn
          </ReactTooltip>
        </li>
        <li>
          <a
            href="https://github.com/Hereiam123"
            className="tooltipped"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="Github"
          >
            <i className="fa fa-github"></i>
          </a>
          <ReactTooltip id="Github" place="top" effect="solid">
            Github
          </ReactTooltip>
        </li>
      </ul>
      </div>
      <div className={styles["user_name-title"]}>
        <h2>Brian De Maio</h2>
        <p>Professional Web Developer</p>
      </div>
    </header>
  );
};

export default UserHeader;
