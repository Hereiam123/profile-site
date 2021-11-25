import React from "react";
import UserHeader from "./User/UserHeader";
import UserWrapper from "./User/UserWrapper";
import styles from "./Columns.module.css";

const RightColumn = () => {
  return (
    <>
      <div className={styles['right-column']}>
        <UserHeader/>
        <UserWrapper/>
      </div>
    </>
  );
};

export default RightColumn;
