import React from "react";
import { Img } from "./LogoElements";
import logo from "../../assets/images/logo2.svg";
import logo2 from "../../assets/images/mobilelogo1-new.png";

const mql = window.matchMedia( '(max-width: 600px)' );

let mobileView = mql.matches;

const Logo = () => {
  return <Img src={mobileView ? logo2 : logo} />;
};

export default Logo;
