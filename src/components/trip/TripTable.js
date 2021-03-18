import React, { useState } from 'react';
import axios from 'axios'

import TripRow from "./TripRow";

function TripTable() {
  const [trips, setTrips] = useState([]);
  const getTrips = () => {
    axios.get('http://localhost:4000/api/trips/').then((res)=>{
      console.log(res.data)
      setTrips(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  React.useEffect(getTrips,[])
  return (
    <div className="container mt-4">
       <table className="table  table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="text-center" scope="col">Trip Name</th>
            <th className="text-center" scope="col">Edit</th>
            <th className="text-center" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {trips.map(trip => { // using props in child component and looping
              return (
                  <TripRow data={trip} key={trip._id} onDelete = {getTrips}/>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TripTable
