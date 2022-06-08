import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Shared.css';


const Header = () => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const navLink = document.getElementsByClassName('nav-link')
        const navbar_nav = document.querySelector('.navbar-nav')
        const hoverBg = document.getElementById('hoverBg')

        for (let i = 0; i < navLink.length; i++) {
            const element = navLink[i];
            element.addEventListener('click', () => {
                const active = document.querySelector('.active')
                active.classList.remove('active')
                element.classList.add('active')


            })

        }


        navbar_nav.addEventListener('mousemove', (e) => {
            const active = document.querySelector('.active')
            active.style.color = 'black'
            e.target.style.color = 'white'
            const x = e.target.offsetLeft
            hoverBg.style.left = x + 'px'
            hoverBg.style.width = e.target.clientWidth + 'px'

        })

        navbar_nav.addEventListener('mouseout', (e) => {
            const active = document.querySelector('.active')
            e.target.style.color = 'black'
            active.style.color = 'white'
            const x = active.offsetLeft
            hoverBg.style.left = x + 'px'
            hoverBg.style.width = active.clientWidth + 'px'
        })
        const active = document.querySelector('.active')
        active.style.color = 'white'
    }, [])


    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">UN</a>
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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">about </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work">work</a>
                        </li>
                        <span id="hoverBg" ></span>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;