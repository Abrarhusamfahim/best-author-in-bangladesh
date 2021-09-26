import React from 'react';
import './Header.css'
import logo from '../../favicon.png'
import book from '../../book.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faSignInAlt} />
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="books">
                <img src={book} alt="" width="40" height="30" class="d-inline-block align-text-top"/>
                    <span className="nav-book"> Books</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="service">Service</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="contact">Contact</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-info" type="submit">{element} Login</button>
                </form>
                </div>
            </div>
        </nav>
            <div className="header-container">
            <img src={logo} alt="" />
            <h1 className="text-info">The best book Author in Bangladesh</h1>
            <p className="text-white-50">We have tried to show the books of the best writers in Bangladesh who have won the Nobel Prize</p>
            <h1>Total Sells: <span className="million">50Million</span></h1>
        </div>
        </div>
        
    );
};

export default Header;