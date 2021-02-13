import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import "./Dashboard.css";
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";

const Dashboard = () => {
    return(
        <div className="dashboard-wrap">
            <div className="row">
                <div className="col-md-12 border border-dark ">
                <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 border border-dark">
                    <Sidemenu />
                </div>
                <div className="col-md-10 border border-dark">

                </div>
            </div>
        </div>
    );
}

export default Dashboard;