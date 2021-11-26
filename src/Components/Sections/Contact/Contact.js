import React from "react";
import contactStyles from "./Contact.module.css";

const Contact = ({ styles }) => {
  return (
    <section id="contact" className={styles.section}>
      <span className={`${styles.icon} btn-floating btn-large lime darken-2`}>
        <i className="material-icons">mail_outline</i>
      </span>
      <h2 className="lime-text text-darken-2">Contact Me</h2>
      <div className={contactStyles["contact-information"]}>
        <div className="row">
          <div className={`${contactStyles["contact-column"]} col s6 l3`}>
            <div className={contactStyles["icon"]}>
              <i className="material-icons">email</i>
            </div>
            <a href="mailto:bdemaio1@gmail.com">
              <p>bdemaio1@gmail.com</p>
            </a>
          </div>
          <div className={`${contactStyles["contact-column"]} col s6 l3`}>
            <div className={contactStyles["icon"]}>
              <i className="material-icons">phone_iphone</i>
            </div>
            <a href="tel:407-797-9158">
              <p>(407)797-9158</p>
            </a>
          </div>
          <div className={`${contactStyles["contact-column"]} col s6 l3`}>
            <div className={contactStyles["icon"]}>
              <i className="material-icons">location_on</i>
            </div>
            <a href="http://maps.google.com/?q=Orlando">
              <p>
                Orlando FL, USA
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
