import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.navbar + " " + styles["navbar-fixed"]}>
      <nav className={`${styles["main-navigation"]} light-bg`}>
        <div className={`${styles["nav-wrapper"]}`}>
          <ul>
            <li>
              <Link to="homeDesktop" activeClass="active" spy={true} smooth={true} className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="education"
                spy={true}
                smooth={true}
                className="navbar-link"
              >
                Education
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} className="navbar-link">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} className="navbar-link">
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} className="navbar-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
