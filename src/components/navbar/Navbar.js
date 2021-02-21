import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-wrap container-fluid fixed-top">
            <div className="navbar row">
                <div className=" float-left">
                    <img src={"images/logo-png.png"} className="logo-img" />
                </div>
                <div className="float-right">
                    <span class="logout-link">
                        <a href="#" id="logout">Logout</a>
                    </span>
                </div>
            </div>


        </div>
    );
}

export default Navbar;