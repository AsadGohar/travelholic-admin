import React from 'react'
import Navbar from "../navbar/Navbar";
import Sidemenu from "../sidemenu/Sidemenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTING ADMIN COMPONENTS HERE
import Dashboard from "../dashboard/Dashboard";
import AnswerTable from "../answer/AnswerTable";
import QuestionTable from "../question/QuestionTable";
import TripTable from "../trip/TripTable";
import RouteTable from "../route/RouteTable";
import AddRouteForm from "../route/AddRouteForm";
import AddTripForm from "../trip/AddTripForm";


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
										<Route exact path="/view-answers" component={AnswerTable} />
										<Route exact path="/view-questions" component={QuestionTable} />
										<Route exact path="/view-trips" component={TripTable} />
										<Route exact path="/view-routes" component={RouteTable} />
										<Route exact path="/add-new-route" component={AddRouteForm} />
										<Route exact path="/add-new-trip" component={AddTripForm} />
								</Switch>
						</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default AdminPanel;
