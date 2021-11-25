import React from "react";
import Header from "./Header/Header";
import Sections from "./Sections/Sections";
import Footer from "./Footer/Footer";
import styles from "./Columns.module.css";

const LeftColumn = () => {
  return (
    <>
      <div className={styles['left-column']}>
        <Header/>
        <Sections/>
        <Footer/>
      </div>
    </>
  );
};

export default LeftColumn;
