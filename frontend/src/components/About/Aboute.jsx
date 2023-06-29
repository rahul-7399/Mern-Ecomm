import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import avtar from "../../assets/avtar.jpg";

const Aboute = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Sample</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={avtar} alt="jpg" className="aboutAvtar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Rahul
          </Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography>I Am Developer</Typography>
        </div>
        <div>
          <Typography style={{ margin: "1vmax 0" }}>
            Hello, I'm Pawar Rahul! I am a passionate and dedicated full-stack
            developer with a strong foundation in web development technologies.
            As a fresher in the field, I am eager to contribute my skills and
            learn from experienced professionals to make a meaningful impact in
            the world of software development.
          </Typography>
          <Typography
            style={{
              margin: "1vmax 0",
            }}
          >
            <ul>
              Technical Skills:
              <li> Front-end : HTML5, CSS3, JavaScript, React.js</li>
              <li> Back-end : Node.js, Express.js</li>
              <li> Database : MongoDB,</li>
              <li> Version Control : Git, GitHub</li>
              <li> Deployment : Heroku</li>
            </ul>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
