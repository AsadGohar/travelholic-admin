import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Sidemenu.css";

const Sidemenu = () => {
    return (
        <div className="sidemenu-wrap">
            <div class="nav-side-menu">
                <div class="brand">Admin Menu</div>
                <i class="fa fa-bars fa-2x toggle-btn" id="toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                <div class="menu-list">

                    <ul id="menu-content" class="menu-content collapse out">
                        <li>
                            <a to="/">
                                <i class="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>

                        {/* DESTINATION MENU */}
                        <li data-toggle="collapse" data-target="#destinations" class="collapsed active">
                            <a href="#"><i class="fa fa-plane fa-lg"></i> Destinations <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="destinations">
                            <li><NavLink to="/all-destinations">View Destinations</NavLink></li>
                            <li><NavLink to="/add-new-destinations">Add new Destination</NavLink></li>
                        </ul>

                        {/* TRIPS MENU */}
                        <li data-toggle="collapse" data-target="#trips" class="collapsed">
                            <a href="#"><i class="fa fa-car fa-lg"></i> Trips <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="trips">
                            <li><a href="#">View all Trips</a></li>
                            <li><a href="#">Add new Trip</a></li>
                            <li><a href="#">Bookings</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>

                        {/* TRANSPORTS MENU */}
                        <li data-toggle="collapse" data-target="#transports" class="collapsed">
                            <a href="#"><i class="fa fa-bus fa-lg"></i> Transport Services <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="transports">
                            <li><a href="#">View transport services</a></li>
                            <li><a href="#">Add new transport service</a></li>
                        </ul>

                        {/* HOTELS MENU */}
                        <li data-toggle="collapse" data-target="#hotels" class="collapsed">
                            <a href="#"><i class="fas fa-bed fa-lg"></i> Hotels <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="hotels">
                            <li><a href="#">View all Hotels</a></li>
                            <li><a href="#">Add new hotel</a></li>
                        </ul>

                        {/* FORUM MENU */}
                        <li data-toggle="collapse" data-target="#forum" class="collapsed">
                            <a href="#"><i class="fa fa-question-circle fa-lg"></i> Forum <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="forum">
                            <li><a href="#">View all questions</a></li>
                            <li><a href="#">View all answers</a></li>
                        </ul>


                        {/* USERS */}
                        <li>
                            <a href="#">
                                <i class="fa fa-user fa-lg"></i> Users
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidemenu;