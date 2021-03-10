import React from 'react'
import "./AdminPanel.css"
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTING ADMIN COMPONENTS HERE
import Dashboard from "../dashboard/Dashboard";
import ViewDestinations from "../destinations/ViewDestinations";
import AddDestination from "../destinations/AddDestination";
import EditDestination from "../destinations/EditDestination";
import ViewTransports from "../transports/ViewTransports";
import AddTransport from "../transports/AddTransport";
import ViewBookings from "../bookings/ViewBookings";
import ViewTripReviews from "../reviews/ViewTripReviews";
import ViewHotels from "../hotels/ViewHotels";

const AdminPanel = () => {
    return (
        <BrowserRouter>
            <div className=" AdminPanel-wrap">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Sidemenu />
                    </div>
                    <div className="col-md-9 pr-5 pt-3">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/all-destinations" component={ViewDestinations} />
                            <Route path="/add-new-destination" component={AddDestination} />
                            <Route path="/view-transports" component={ViewTransports} />
                            <Route path="/edit-destination/:id" component={EditDestination}/>
                            <Route path="/add-new-transport" component={AddTransport} />
                            <Route path="/trip-bookings" component={ViewBookings} />
                            <Route path="/trip-reviews" component={ViewTripReviews} />
                            <Route path="/view-hotels" component={ViewHotels} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AdminPanel;
