import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {

    return (
        <div className="container dashboard-wrap">
            <div className="row justify-content-center mt-5 mb-5">
                <h1 className="display-3">Welcome to Admin Panel</h1>

                <div className="col-md-3 ">
                    <Link to="/all-destinations" className="shortcut-link">
                        <div class="box-part text-center shortcut-card">
                            <i class="fa fa-plane fa-4x" aria-hidden="true"></i>
                            <div class="title">
                                <h4>Destinations</h4>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-3 ">
                    <Link to="/view-trips" className="shortcut-link">
                        <div class="box-part text-center shortcut-card">
                            <i class="fa fa-car fa-4x" aria-hidden="true"></i>
                            <div class="title">
                                <h4>Trips & Tours</h4>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-3 ">
                    <Link to="/trip-bookings" className="shortcut-link">
                        <div class="box-part text-center shortcut-card">
                            <i class="fa fa-suitcase fa-4x" aria-hidden="true"></i>
                            <div class="title">
                                <h4>Bookings</h4>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-3 ">
                    <Link to="/registered-users" className="shortcut-link">
                        <div class="box-part text-center shortcut-card">
                            <i class="fa fa-users fa-4x" aria-hidden="true"></i>
                            <div class="title">
                                <h4>Users</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <hr />

            

            <div className="row justify-content-center mt-3 mb-5">
                <div className="col-12 text-center mb-4">
                    <p className="display-4 mt-3">Data Counter</p>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-users" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Users</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-plane" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Destinations</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                    <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-car" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Trips</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-suitcase" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Bookings</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fas fa-bed" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Hotels</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-bus" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Transports</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-road" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Routes</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card border-info mx-sm-1 p-3 counter-card">
                        <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-question-circle" aria-hidden="true"></span></div>
                        <div class="text-success text-center mt-3"><h4>Questions</h4></div>
                        <div class="text-dark text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Dashboard;