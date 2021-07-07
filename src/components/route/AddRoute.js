import React, { useState,useEffect } from 'react';
import axios from "../support-components/axios"
import { toast } from 'react-toastify';


function AddRoute() {
  const [to , setTo] = useState()
  const [from , setFrom] = useState()
  const [destinations, setDestinations] = useState([]);
  useEffect(()=>{
    axios.get('/tripplannerdestination/')
    .then(res => {
      console.log(res.data)
      setDestinations(res.data)
    })
    .catch(err=>console.log(err))
  },[])
  
  const addRoute = (e) => {
    e.preventDefault();
    if (to===from) {
      toast.warn('To and From Destinations Cannot Match', {
        position: toast.POSITION.TOP_CENTER
      })
    }
    else {
      axios.post('/routes',{to,from})
      .then(res=>{
        toast.success("Route Added", {
          position: toast.POSITION.TOP_CENTER
        });
        setTo('')
        setFrom('')
      })
      .catch(err=>{
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        })
      })
    }
  }
  return (
    <div>
      <form onSubmit={addRoute} className="container mt-4 border border-dark pt-2 pb-4">
        <h3>Add Route</h3>
        <div className="form-group">
          <label>Destination From :</label>
          <select id="from" className="form-control" onChange={e=>setFrom(e.target.value)} >
            <option></option>
            {destinations.map(destination => { 
              return (
                <option value={destination._id}>{destination.name}</option>
              )
            })}
          </select>
        </div>
        <div className="form-group ">
          <label>Destination To :</label>
          <select id="to" className="form-control" onChange={e=>setTo(e.target.value)} >
            <option></option>
            {destinations.map(destination => { 
              return (
                <option value={destination._id}>{destination.name}</option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-dark mb-5">Add Hotel</button>
      </form>
    </div>
  )
}

export default AddRoute
