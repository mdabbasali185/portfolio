import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Shared.css';


const Header = () => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const navLink = document.getElementsByClassName('nav-link')
        const navbar_nav = document.querySelector('.navbar-nav')
        const hoverBg = document.getElementById('hoverBg')

        navbar_nav.addEventListener('mousemove', (e) => {
            const active = document.querySelector('.active')
            active.style.color = '#333'
            e.target.style.color = 'white'
            const x = e.target.offsetLeft
            hoverBg.style.left = x + 'px'
            hoverBg.style.width = e.target.clientWidth + 'px'

        })
        navbar_nav.addEventListener('mouseout', (e) => {
            const active = document.querySelector('.active')
            e.target.style.color = '#333'
            active.style.color = 'white'
            const x = active.offsetLeft
            hoverBg.style.left = x + 'px'
            hoverBg.style.width = active.clientWidth + 'px'
        })

        const active = document.querySelector('.active')
        active.style.color = 'white'
        hoverBg.style.width = active.clientWidth + 'px'


    }, [])

   
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light position-relative">
            <div className="container">
                <Link className="navbar-brand" to="/">UN</Link>


                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex text-capitalize">
                    <li className="nav-item">
                        <NavLink className="active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about">about </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#contact">contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#work">work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#work">work</NavLink>
                    </li>
                    <span id="hoverBg" ></span>
                </ul>
                <div className={`toggleButton d-block d-lg-none  ms-auto ${toggle && 'active'}`} onClick={() => setToggle(!toggle)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`myNav text-capitalize ${toggle && 'active'} `}>
                    <li className="nav-item">
                        <NavLink className="active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about">about </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#contact">contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#work">work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#work">work</NavLink>
                    </li>
                    <span id="hoverBg" ></span>
                </ul>



            </div>
        </nav>

    );
};

export default Header;