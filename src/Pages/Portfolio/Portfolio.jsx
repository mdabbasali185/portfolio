import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProgressBar } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "swiper/css";
import { themeContext } from "../../Context";
import bikeOnline from '../img/s2.png';
import EStore from '../img/s1.png';
import GymX from '../img/s3.png';
import carParadise from '../img/s4.png';
import ownPic from "../img/Co-6005=.jpg";
import { Row } from "react-bootstrap";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio py-5" id="portfolio">
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
          <button className="btn btn-primary"> Explore me</button>
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
            <a
              href="https://drive.google.com/file/d/1rl6qoc1-3xQ3avf3vzbt8YedM0cBVkaN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">Download Resume</button>
            </a>
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
        </div>
      </div>

      {/* heading */}
      <span className="text-center fs-1 py-5" style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span className="text-center fs-2">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <div id="portfolio" className="my-4">
          <h1 className="text-center fw-bold my-5">
            My <span className="text-primary"> Portfolio </span>
          </h1>

          <Row xs={1} md={2} lg={3} className="g-4">
            <SwiperSlide>
              <Col>
                <Card>
                  <div
                    className="card-img-top portfolio_img"
                    style={{ backgroundImage: `url(${bikeOnline})` }}
                  />
                  <Card.Body>
                    <Card.Title> Bikes Online </Card.Title>
                    <div>A MERN stack inventory management website</div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        href="https://final-assignment-5fbe7.web.app/"
                      >
                        {" "}
                        Live preview{" "}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>

            <SwiperSlide>
              <Col>
                <Card>
                  <div
                    className="card-img-top portfolio_img"
                    style={{ backgroundImage: `url(${EStore})` }}
                  />
                  <Card.Body>
                    <Card.Title> ESTORE </Card.Title>
                    <div>A tourism booking website</div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        href="https://wearhouse-e465d.web.app/"
                      >
                        {" "}
                        Live preview{" "}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col>
                <Card>
                  <div
                    className="card-img-top portfolio_img"
                    style={{ backgroundImage: `url(${GymX})` }}
                  />
                  <Card.Body>
                    <Card.Title> EStore </Card.Title>
                    <div>A inventory management website</div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        href="https://gym-55c6d.web.app/"
                      >
                        {" "}
                        Live preview{" "}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col>
                <Card>
                  <div
                    className="card-img-top portfolio_img"
                    style={{ backgroundImage: `url(${carParadise})` }}
                  />
                  <Card.Body>
                    <Card.Title> CarParadise </Card.Title>
                    <div>Car website</div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        href="https://carparadisemdabbasali.netlify.app/"
                      >
                        {" "}
                        Live preview{" "}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>
          </Row>
        </div>
      </Swiper>
    </div>
  );
};

export default Portfolio;
