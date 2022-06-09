import React from "react";
import Toggle from "../../Toggle/Toggle.jsx";
import Resume from "../Header/resume.pdf";
import "./Header.css";
import { Link } from "react-scroll";
const Header = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Portfolio</div>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>

                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>

                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contact
                            </Link>
                        </li>


                    </ul>
                </div>
                <a href={Resume} download>
                    <button className="button s-button fw-bold">Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Header;
