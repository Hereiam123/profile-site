import React from "react";
import contactStyles from "./Contact.module.css";

const Contact = ({ styles }) => {
  return (
    <section id="contact" className={styles.section}>
      <span className={`${styles.icon} btn-floating btn-large lime darken-2`}>
        <i className="material-icons">mail_outline</i>
      </span>

      <h2 className="lime-text text-darken-2">Contact Me</h2>

      <div className={contactStyles['contact-information']}>
        <div className="row">
          <div className="col s6 l3">
            <div className="icon">
              <i className="material-icons">email</i>
            </div>
            <p>bdemaio1@gmail.com</p>
          </div>

          <div className="col s6 l3">
            <div className="icon">
              <i className="material-icons">phone_iphone</i>
            </div>
            <p>(407)797-9158</p>
          </div>

          <div className="col s6 l3">
            <div className="icon">
              <i className="material-icons">location_on</i>
            </div>
            <p>
              Orlando <br />
              FL, USA
            </p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
