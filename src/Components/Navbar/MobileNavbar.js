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
      className="btn btn-floating btn-large light-bg"
      icon={<Icon>menu</Icon>}
      fab={{
        hoverEnabled: false,
      }}
      floating
      large
      node="button"
    >
      <Button
        className="red"
        floating
        icon={<Icon>home</Icon>}
        node="button"
        onClick={() => mobileScrollTo("home")}
      />
      <Button
        className="yellow darken-1 cyan-text text-darken-2"
        floating
        icon={<Icon>account_balance</Icon>}
        node="button"
        onClick={() => mobileScrollTo("education")}
      />
      <Button
        className="green"
        floating
        icon={<Icon>work</Icon>}
        node="button"
        onClick={() => mobileScrollTo("works")}
      />
      <Button
        className="blue accent-3"
        floating
        icon={<Icon>assessment</Icon>}
        node="button"
        onClick={() => mobileScrollTo("skills")}
      />
      <Button
        className="deep-purple darken-3"
        floating
        icon={<Icon>important_devices</Icon>}
        node="button"
        onClick={() => mobileScrollTo("services")}
      />
      <Button
        className="lime darken-2"
        floating
        icon={<Icon>mail_outline</Icon>}
        node="button"
        onClick={() => mobileScrollTo("contact")}
      />
    </Button>
  );
};

export default MobileNavbar;