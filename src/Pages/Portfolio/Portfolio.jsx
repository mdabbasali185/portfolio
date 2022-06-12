import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import EStore from "../img/s1.png";
import bikeOnline from "../img/s2.png";
import GymX from "../img/s3.png";
import carParadise from "../img/s4.png";
import "./Portfolio.css";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="row d-flex align-items-center justify-content-center ">
      <div>
        <div className="portfolio py-5" id="portfolio">
          {/* heading */}
          <span
            className="text-center fs-1 "
            style={{ color: darkMode ? "white" : "" }}
          >
            Recent Projects
          </span>
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
                        <div>
                          ● This manufacturing site where users can create
                          orders and Admin can add users to add/remove products,
                          can manage all orders.
                        </div>
                        <div>
                          ● Login and sign up to ensure authorized users can
                          order products on this site.
                        </div>
                        <div>
                          ● Technology Used: HTML, CSS, React Bootstrap,
                          React.js, React Router, Firebase Express, Mongo, JWT.
                        </div>
                        <div className="mt-3">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            href="https://final-assignment-5fbe7.web.app/"
                          >
                            {" "}
                            Live preview{" "}
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-info mx-3 "
                            href="https://final-assignment-5fbe7.web.app/"
                          >
                            {" "}
                            Explore More{" "}
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
                        <div>
                          {" "}
                          ● A complete inventory management with google login
                          and email password login feature, user can manage all
                          orders.
                        </div>
                        <div>
                          ● There is a managed inventory route where users can
                          add, remove and manage any product.
                        </div>
                        <div>
                          ● ATechnology Used: HTML, CSS, React Bootstrap,
                          React.js, React Router, Firebase Express, Mongo, JWT.
                        </div>
                        <div className="mt-3">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            href="https://wearhouse-e465d.web.app/"
                          >
                            {" "}
                            Live preview{" "}
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-info mx-3 "
                            href="https://wearhouse-e465d.web.app/"
                          >
                            {" "}
                            Explore More{" "}
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
                        <Card.Title> GymX </Card.Title>

                        <div>
                          {" "}
                          ● This is a simple and responsive gym website with
                          multiple routes.This website throw user can haired
                          personal trainer.
                        </div>
                        <div>
                          ● This website is made from a Figma design file. It
                          showcases product features, reviews company blogs.
                        </div>
                        <div>
                          ● Technology Used: HTML, CSS, javaScript,
                          Bootstrap,ReactJS
                        </div>
                        <div className="mt-3">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            href="https://gym-55c6d.web.app/"
                          >
                            {" "}
                            Live preview{" "}
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-info mx-3"
                            href="https://gym-55c6d.web.app/"
                          >
                            {" "}
                            Explore More{" "}
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
                        <div>
                          ● This is a simple and responsive car website with
                          multiple routes.This website throw user can buy all
                          kind branded car.
                        </div>
                        <div>
                          ● This website is made from a Figma design file. It
                          showcases Car features, reviews company blogs.
                        </div>
                        <div>
                          ● Technology Used: HTML, CSS, javaScript,
                          Bootstrap,ReactJS
                        </div>
                        <div className="mt-3">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            href="https://carparadisemdabbasali.netlify.app/"
                          >
                            {" "}
                            Live preview{" "}
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-info mx-3"
                            href="https://carparadisemdabbasali.netlify.app/"
                          >
                            {" "}
                            Explore More{" "}
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
      </div>
    </div>
  );
};

export default Portfolio;
