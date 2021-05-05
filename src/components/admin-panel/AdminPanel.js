import React, { useEffect } from 'react'
import "./AdminPanel.css"
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../actions/adminActions';
import { Spinner } from 'react-bootstrap';


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
import AdminScreen from "../administrator/AdminScreen";



const AdminPanel = () => {
    const dispatch = useDispatch()

    const isAdminLoggedIn = useSelector(state => state.isLoggedIn)
    const { loading, adminInfo } = isAdminLoggedIn

    useEffect(() => {
        dispatch(isLoggedIn())
    }, [])

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
                            {loading ? <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner> : (
                                <Route path="/login" component={Login} />
                            )}

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
                                    <Route path="/view-answers" component={AnswerTable} />
                                    <Route path="/view-questions" component={QuestionTable} />
                                    <Route path="/view-trips" component={ViewTrips} />
                                    <Route path="/edit-trip" component={EditTrip} />
                                    <Route path="/view-routes" component={RouteTable} />
                                    <Route path="/add-new-route" component={AddRouteForm} />
                                    <Route path="/add-new-trip" component={AddTripForm} />
                                    <Route path="/registered-users" component={UserTable} />
                                    <Route path="/administrator" component={AdminScreen} />
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
