import React, { useState } from 'react';
import axios from 'axios'

function AddRouteForm() {
  const [to , setTo] = useState()
  const [from , setFrom] = useState()
  const [destinations, setDestinations] = useState([]);
  const getDestinations = () => {
    axios.get('http://localhost:4000/api/destinations/').then((res)=>{
      setDestinations(res.data.destinations);
    }).catch((err)=>{
      console.log(err)
    });
  }
  var getId = (val) =>{
    var id;
    destinations.forEach((destination)=>{
      if(destination.title===val)
      {
        id=destination.id;
      }
    })
    return id;
  }
  const selectTo = (e)=>{
    var to = getId(e.target.value)
    setTo(to);
  }
  const selectFrom = (e)=>{
    var from = getId(e.target.value)
    setFrom(from);
  }
  React.useEffect(getDestinations,[])
  const addRoute = (e) => {
    e.preventDefault();
    
    if(to===from){
      
      alert("To and From values cannot be same")
    }
    else{

      axios.post('http://localhost:4000/api/route/',{to,from})
      .then(res=>{
        alert('Route Added')
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
  return (
    <div>
      <form onSubmit={addRoute} className="container mt-4 border border-dark pt-2 pb-4">
        <h3>Add Route</h3>
        <div className="form-group ">
          <label>Destination To :</label>
          <select id="to" className="form-control" onChange={selectTo} >
            <option></option>
            {destinations.map(destination => { 
              return (
                <option>{destination.title}</option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Destination From :</label>
          <select id="from" className="form-control" onChange={selectFrom} >
            <option></option>
            {destinations.map(destination => { 
              return (
                <option>{destination.title}</option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddRouteForm
