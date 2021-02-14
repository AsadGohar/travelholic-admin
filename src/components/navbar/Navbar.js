import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-wrap container-fluid">
            <div className="navbar row ">
                <div className="col-xm-3 justify-content-center">
                    <img src={"images/logo-png.png"} className="logo-img" />
                </div>
                <div className="col-xm-7"></div>
                <div className="col-xm-2">
                    <span class="logout-link">
                        <a href="#" id="logout">Logout</a>
                    </span>
                </div>

            </div>


        </div>
    );
}

export default Navbar;