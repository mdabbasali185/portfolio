import React, { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import "./About.css";
import ownPic from "../img/Co-6005=.jpg";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="about">
      <span
        className="text-center fs-1 "
        style={{ color: darkMode ? "white" : "" }}
      ></span>
      <div className="row d-flex align-items-center justify-content-center ">
        <div className="col-lg-6">
          <img className="img-edit img-fluid" src={ownPic} alt="" />
        </div>
        <div className="col-lg-6">
          <h3>Hi There</h3>

          <h1>
            I am <span className="text-primary">Md Abbas Ali</span>
          </h1>
          <p>
            I am Bangladeshi web designer and developer focused on Front End
            Developer. I will make suer clean and user friendly experience. My
            passionate about building excellent website and improve about
            building.
          </p>
          <div className="btn-style">
            <a
              className="second-style"
              href="https://www.linkedin.com/in/mdabbasali185/"
              target="_blank"
              rel="noreferrer"
            >
              <span>More details</span>
              <i></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="fw-bold text-center my-4">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="fw-bold my-3">PERSONAL INFORMATION</h4>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  NAME: <span className="fw-bold">Md Abbas Ali</span>
                </p>
                <p>
                  AGE: <span className="fw-bold">21</span>
                </p>
                <p>
                  NATIONALITY: <span className="fw-bold">Bangladeshi</span>
                </p>
                <p>
                  Work Status: <span className="fw-bold">Available</span>
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Address: <span className="fw-bold">Dhaka Bangladesh</span>
                </p>
                <p>
                  Phone: <span className="fw-bold">+88 01962844395</span>
                </p>
                <p>
                  Email:
                  <span className="fw-bold">mdabbasali185@gmail.com</span>
                </p>
                <p>
                  Language: <span className="fw-bold">Bangla, English</span>
                </p>
              </div>
            </div>
            <div className="btn-style">
              <a
                href="https://drive.google.com/file/d/1rl6qoc1-3xQ3avf3vzbt8YedM0cBVkaN/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span>button</span>
                <i></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <label htmlFor="">HTML</label>
            <ProgressBar striped variant="success" now={98} />
            <label htmlFor="">CSS</label>
            <ProgressBar striped variant="info" now={87} />
            <label htmlFor="">JS</label>
            <ProgressBar striped variant="warning" now={76} />
            <label htmlFor="">REACT</label>
            <ProgressBar striped variant="danger" now={88} />
            <label htmlFor="">MONGO DB</label>
            <ProgressBar striped variant="success" now={61} />
            <label htmlFor="">EXPRESS</label>
            <ProgressBar striped variant="info" now={55} />
            <label htmlFor="">NODE</label>
            <ProgressBar striped variant="warning" now={30} />
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
