import React, { useEffect, useState } from 'react'
import "./AdminPanel.css"
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';



//IMPORTING ADMIN COMPONENTS HERE
import Login from "../authentication/Login";
import Dashboard from "../dashboard/Dashboard";
import ViewDestinations from "../destinations/ViewDestinations";
import AddDestination from "../destinations/AddDestination";
import EditDestination from "../destinations/EditDestination";
import ViewTransports from "../transports/ViewTransports";
import AddTransport from "../transports/AddTransport";
import ViewBookings from "../bookings/ViewBookings";
import ViewTripReviews from "../reviews/ViewTripReviews";
import ViewHotels from "../hotels/ViewHotels";
import AnswerTable from "../answer/AnswerTable";
import QuestionTable from "../question/QuestionTable";
import ViewTrips from "../trip/ViewTrips";
import EditTrip from "../trip/EditTrip";
import RouteTable from "../route/RouteTable";
import AddRouteForm from "../route/AddRouteForm";
import AddTripForm from "../trip/AddTrip";
import UserTable from "../user/UserTable";


const AdminPanel = ({ location }) => {

    const adminInfo = useSelector(state => state.adminLogin.adminInfo)


    return (
        <BrowserRouter>
            <div className=" AdminPanel-wrap">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {adminInfo ?
                        <div className="col-md-3">
                            <Sidemenu />
                        </div> : null}

                    <div className="col-md-9 pr-5 pt-3">
                        <Switch>
                            <Route path="/login" component={Login} />
                            {adminInfo ? (
                                <>
                                    <Route exact path="/" component={Dashboard} />
                                    <Route path="/all-destinations" component={ViewDestinations} />
                                    <Route path="/add-new-destination" component={AddDestination} />
                                    <Route path="/view-transports" component={ViewTransports} />
                                    <Route path="/edit-destination/:id" component={EditDestination} />
                                    <Route path="/add-new-transport" component={AddTransport} />
                                    <Route path="/trip-bookings" component={ViewBookings} />
                                    <Route path="/trip-reviews" component={ViewTripReviews} />
                                    <Route path="/view-hotels" component={ViewHotels} />
                                    <Route exact path="/view-answers" component={AnswerTable} />
                                    <Route exact path="/view-questions" component={QuestionTable} />
                                    <Route exact path="/view-trips" component={ViewTrips} />
                                    <Route exact path="/edit-trip" component={EditTrip} />
                                    <Route exact path="/view-routes" component={RouteTable} />
                                    <Route exact path="/add-new-route" component={AddRouteForm} />
                                    <Route exact path="/add-new-trip" component={AddTripForm} />
                                    <Route exact path="/registered-users" component={UserTable} />
                                </>
                            ) : (
                                <Redirect to='/login' />
                            )}

                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AdminPanel;
