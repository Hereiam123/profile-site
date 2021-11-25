import React from "react";
import styles from "./UserWrapper.module.css";
import profileImage from "../../assets/images/Profile_Image.jpg"

const UserWrapper = () => {
  return (
    <div className={styles['user-wrapper']}>
      <div className={styles['profile-image']}>
        <img
          src={profileImage}
          alt="Brian De Maio"
          className="responsive-img"
        />
      </div>
      <div className={styles['user-content']}>
        <ul className={styles.collection}>
          <li className={styles['collection-item']}>
            <span className="bolder">Hello my name is Brian De Maio</span>
            <br />
            <br />I am a <i className="text-color">Web Designer</i> &
            <i className="text-color">Web Developer</i> from <i>Orlando</i>, FL,
            USA. Clean responsive design is a great passion of mine, but my
            skills are not just limited to Front End development, but also
            Backend and App development.
          </li>
          <li className={styles['collection-item']}>
            <a
              href="mailto:bdemaio1@gmail.com"
              className={`btn waves-effect waves-light light-bg ${styles['a']}`}
            >
              <span>CONTACT ME!</span><i className="material-icons">email</i>
            </a>
          </li>
        </ul>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default UserWrapper;
