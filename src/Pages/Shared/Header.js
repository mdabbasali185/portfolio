import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Shared.css'

const Header = () => {

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
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/">UN</Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-capitalize">
                        <li class="nav-item">
                            <NavLink class="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/about">about </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="#contact">contact</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="#work">work</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="#work">work</NavLink>
                        </li>
                        <span id="hoverBg" ></span>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;