import React from 'react'
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTING ADMIN COMPONENTS HERE
import Dashboard from "../dashboard/Dashboard";
import ViewDestinations from "../destinations/ViewDestinations";
import ViewTransports from "../transports/ViewTransports";
import ViewBookings from "../bookings/ViewBookings";
import ViewTripReviews from "../reviews/ViewTripReviews";

const AdminPanel = () => {
    return (
        <BrowserRouter>
            <div className="AdminPanel-wrap">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Sidemenu />
                    </div>
                    <div className="col-md-9 pr-5">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/all-destinations" component={ViewDestinations} />
                            <Route path="/view-transports" component={ViewTransports} />
                            <Route path="/trip-bookings" component={ViewBookings} />
                            <Route path="/trip-reviews" component={ViewTripReviews} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AdminPanel;