import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../assets/rv-logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      logoWidth="250px"
      logo={logo}
      logoHoverColor="hsl(250,100%,75%)"
      navColor2="hsl(219,48%,8%)"
      burgerColor="hsl(250,100%,75%)"
      burgerColorHover="hsl(255,100%,75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="HSL(255,100%,75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="hsla(255,100%,75%)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
