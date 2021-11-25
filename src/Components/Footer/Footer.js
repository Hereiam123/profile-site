import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.copyright}>
        <div className="row">
          <div className={`col s12 m6 l6 ${styles.left} light-bg`}>
            DeMaioDesign.com <br />
            {new Date().getFullYear()} {" "}
            - Copyright <br />
            <br />
          </div>
          <div className={`col s12 m6 l6 ${styles.right} dark-bg`}>
            Contact Me! <br />
            bdemaio1@gmail.com
            <br />
            Icons made by
            <a
              href="https://www.flaticon.com/authors/roundicons"
              title="Roundicons"
            >
              {" "}Roundicons{" "}
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
