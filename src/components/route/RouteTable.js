import React, { useState } from 'react';
import axios from 'axios'

import RouteRow from "./RouteRow";

function RouteTable() {
  const [routes, setRoutes] = useState([]);
  const getRoutes = () => {
    axios.get('http://localhost:4000/api/route/admin').then((res)=>{
      setRoutes(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  React.useEffect(getRoutes,[])
  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="text-center" scope="col">Destination To : </th>
            <th className="text-center" scope="col">Destination From : </th>
            <th className="text-center" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => { // using props in child component and looping
              return (
                <RouteRow data={route} key={route.id} onDelete = {getRoutes}/>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RouteTable
