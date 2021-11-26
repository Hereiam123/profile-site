import React from "react";
import { Button, Icon } from "react-materialize";
import Scroll from "react-scroll";

const MobileNavbar = () => {
  const mobileScrollTo = (id) => {
    const scroller = Scroll.scroller;
    scroller.scrollTo(id, {
      smooth: true,
    });
  };
  return (
    <Button
      className="btn btn-floating btn-large light-bg navbar-link-mobile"
      icon={<Icon>menu</Icon>}
      fab={{
        hoverEnabled: false,
      }}
      floating
      large
      node="button"
    >
      <Button
        className="blue navbar-link-mobile"
        floating
        icon={<Icon>home</Icon>}
        node="button"
        onClick={() => mobileScrollTo("homeMobile")}
      />
      <Button
        className="white navbar-link-mobile"
        floating
        icon={<Icon className="material-icons cyan-text text-darken-2">account_balance</Icon>}
        node="button"
        onClick={() => mobileScrollTo("education")}
      />
      <Button
        className="light-green navbar-link-mobile"
        floating
        icon={<Icon>work</Icon>}
        node="button"
        onClick={() => mobileScrollTo("works")}
      />
      <Button
        className="deep-orange navbar-link-mobile"
        floating
        icon={<Icon>assessment</Icon>}
        node="button"
        onClick={() => mobileScrollTo("skills")}
      />
      <Button
        className="deep-purple darken-3 navbar-link-mobile"
        floating
        icon={<Icon>important_devices</Icon>}
        node="button"
        onClick={() => mobileScrollTo("services")}
      />
      <Button
        className="lime darken-2 navbar-link-mobile"
        floating
        icon={<Icon>mail_outline</Icon>}
        node="button"
        onClick={() => mobileScrollTo("contact")}
      />
    </Button>
  );
};

export default MobileNavbar;
