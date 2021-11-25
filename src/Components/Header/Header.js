import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../Navbar/MobileNavbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <MobileNavbar/>
      <div id="home" className={`light-bg ${styles["header-wrap"]}`}>
        <div className={`${styles["header-content"]}`}>
          <h1>
            My name is <strong>Brian De Maio</strong> |
          </h1>
          <span className={`${styles["sub-text"]}`}>
            I love <strong>Programming</strong>,<strong>UI Design</strong>, and
            <strong> Web and App Development</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
