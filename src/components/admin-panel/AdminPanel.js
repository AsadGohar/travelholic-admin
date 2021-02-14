import React from 'react'
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTING ADMIN COMPONENTS HERE
import Dashboard from "../dashboard/Dashboard";
import ViewDestinations from "../destinations/ViewDestinations";


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
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AdminPanel;