import React from 'react'
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTING ADMIN COMPONENTS HERE
import Dashboard from "../dashboard/Dashboard";


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
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AdminPanel;