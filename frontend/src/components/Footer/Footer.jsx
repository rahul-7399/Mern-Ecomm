import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey,My Name is Rahul Pawar.I am a Full-Stack Developer. As a fresher,
          I am excited to join a dynamic team where I can contribute my skills,
          gain practical experience, and further develop my expertise in
          full-stack development. I am open to new opportunities and challenges
          that allow me to refine my skills and make a positive impact on user
          experiences.
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/rahul-7399" target="blank">
          <BsGithub />
        </a>
        <a href="" target="blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rahul-pawar7399/" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
