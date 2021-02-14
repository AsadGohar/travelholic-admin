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
                        <Link to="/" className="sidemenu-link">
                            <li>
                                <i class="fa fa-dashboard fa-lg"></i> Dashboard
                            </li>
                        </Link>

                        {/* DESTINATION MENU */}
                        <li data-toggle="collapse" data-target="#destinations" class="collapsed">
                            <i class="fa fa-plane fa-lg"></i> Destinations <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="destinations">
                            <Link to="/all-destinations" className="sidemenu-link"><li>View Destinations</li></Link>
                            <Link to="/add-new-destination" className="sidemenu-link"><li>Add new Destination</li></Link>
                        </ul>

                        {/* TRIPS MENU */}
                        <li data-toggle="collapse" data-target="#trips" class="collapsed">
                            <i class="fa fa-car fa-lg"></i> Trips <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="trips">
                            <Link to="/view-trips" className="sidemenu-link"><li>View all Trips</li></Link>
                            <Link to="/add-new-trip" className="sidemenu-link"><li>Add new Trip</li></Link>
                            <Link to="/trip-bookings" className="sidemenu-link"><li>Bookings</li></Link>
                            <Link to="/trip-reviews" className="sidemenu-link"><li>Trip Reviews</li></Link>
                        </ul>

                        {/* TRANSPORTS MENU */}
                        <li data-toggle="collapse" data-target="#transports" class="collapsed">
                            <i class="fa fa-bus fa-lg"></i> Transport Services <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="transports">
                            <Link to="/view-transports" className="sidemenu-link"><li>View transport services</li></Link>
                            <Link to="/add-new-transport" className="sidemenu-link"><li>Add new transport service</li></Link>
                        </ul>

                        {/* ROUTES MENU */}
                        <li data-toggle="collapse" data-target="#routes" class="collapsed">
                            <i class="fa fa-road fa-lg"></i> Routes <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="routes">
                            <Link to="/view-routes" className="sidemenu-link"><li>View available Routes</li></Link>
                            <Link to="/add-new-route" className="sidemenu-link"><li>Add new Route</li></Link>
                        </ul>

                        {/* HOTELS MENU */}
                        <li data-toggle="collapse" data-target="#hotels" class="collapsed">
                            <i class="fas fa-bed fa-lg"></i> Hotels <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="hotels">
                            <Link to="/view-hotels" className="sidemenu-link"><li>View all Hotels</li></Link>
                            <Link to="/add-new-hotel" className="sidemenu-link"><li>Add new Hotel</li></Link>
                        </ul>

                        {/* FORUM MENU */}
                        <li data-toggle="collapse" data-target="#forum" class="collapsed">
                            <i class="fa fa-question-circle fa-lg"></i> Forum <span class="arrow"></span>
                        </li>
                        <ul class="sub-menu collapse" id="forum">
                            <Link to="/view-questions" className="sidemenu-link"><li>View all questions</li></Link>
                            <Link to="/view-answers" className="sidemenu-link"><li>View all answers</li></Link>
                        </ul>


                        {/* USERS */}
                        <Link to="/registered-users" className="sidemenu-link">
                            <li>
                                <i class="fa fa-user fa-lg"></i> Users
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidemenu;
