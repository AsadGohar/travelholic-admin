import React, { useState,useEffect } from 'react';
import axios from "../support-components/axios";

import RouteRow from "./RouteRow";

function RouteTable() {
  const [routes, setRoutes] = useState([]);
  const getRoutes = () => {
    axios.get('/routes').then((res)=>{
      setRoutes(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    axios.get('/routes').then((res)=>{
      setRoutes(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  })
  return (
    <div className="container mt-4">
      <h5>Routes</h5>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="text-center" scope="col">ID </th>
            <th className="text-center" scope="col">Destination From : </th>
            <th className="text-center" scope="col">Destination To : </th>
            <th className="text-center" scope="col">Created At</th>
            <th className="text-center" scope="col">Updated At</th>
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
