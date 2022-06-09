import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mdabbasali185@gmail.com</span>
        <div className="f-icons">
          <a
            className="text-decoration-none text-light"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/mdabbasali185"
          >
            <Insta color="white" size={"3rem"} />
          </a>

          <a
            className="text-decoration-none text-light"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/mdabbasali185"
          >
            <Facebook color="white" size={"3rem"} />
          </a>

          <a
            className="text-decoration-none text-light"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mdabbasali185"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
