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
      className="btn btn-floating btn-large light-bg navbar-link-mobile-open"
      icon={<Icon>menu</Icon>}
      fab={{
        hoverEnabled: false,
      }}
      data-name="Mobile Menu Open"
      floating
      large
      node="button"
    >
      <Button
        className="blue navbar-link-mobile-home"
        data-name="Home"
        floating
        icon={<Icon>home</Icon>}
        node="button"
        onClick={() => mobileScrollTo("homeMobile")}
      />
      <Button
        className="white navbar-link-mobile"
        data-name="Education"
        floating
        icon={
          <Icon className="material-icons cyan-text text-darken-2">
            account_balance
          </Icon>
        }
        node="button"
        onClick={() => mobileScrollTo("education")}
      />
      <Button
        className="light-green navbar-link-mobile"
        data-name="Works"
        floating
        icon={<Icon>work</Icon>}
        node="button"
        onClick={() => mobileScrollTo("works")}
      />
      <Button
        className="deep-orange navbar-link-mobile"
        data-name="Skills"
        floating
        icon={<Icon>assessment</Icon>}
        node="button"
        onClick={() => mobileScrollTo("skills")}
      />
      <Button
        className="deep-purple darken-3 navbar-link-mobile"
        data-name="Services"
        floating
        icon={<Icon>important_devices</Icon>}
        node="button"
        onClick={() => mobileScrollTo("services")}
      />
      <Button
        className="blue darken-3 navbar-link-mobile"
        data-name="Portfolio"
        floating
        icon={<Icon>center_focus_strong</Icon>}
        node="button"
        onClick={() => mobileScrollTo("portfolio")}
      />
      <Button
        className="lime darken-2 navbar-link-mobile"
        data-name="Contact"
        floating
        icon={<Icon>mail_outline</Icon>}
        node="button"
        onClick={() => mobileScrollTo("contact")}
      />
    </Button>
  );
};

export default MobileNavbar;
