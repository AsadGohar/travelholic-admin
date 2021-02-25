import React,{useState} from 'react'
import axios from 'axios'

import Itinerary from './Itinerary'

function AddTripForm() {
  const [itineraryDays,setItineraryDays] = useState(0)
  const [data,setData] = useState({
    title:'',
    price:'',
    description:'',
    rating:'',
    attractions:'',
    excludes:'',
    service_provided:'',
    start_date:'',
    end_date:'',
    itinerary:[]
  })
  const increase=(e)=>{
    e.preventDefault()
    setItineraryDays(itineraryDays+1)
  }
  const decrease=(e)=>{
    e.preventDefault()
    setItineraryDays(itineraryDays-1)

  }
  
  return (
    <div>
      <form className="container mt-4 border border-dark pt-2 pb-4">
        <h3>Add Trip</h3>
        <div class="form-group">
          <label>Title</label>
          <input type="email" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="number" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Rating</label>
          <input type="number" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Attractions</label>
          <input type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Excludes</label>
          <input type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Services Provided</label>
          <input type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Start Date</label>
          <input type="date" class="form-control"/>
        </div>
        <div class="form-group">
          <label>End Date</label>
          <input type="date" class="form-control"/>
        </div>
        <div class="form-group">
          <h5>Itinerary Days : {itineraryDays}</h5>
          <button onClick={increase} class="mt-4 btn btn-primary mr-2">Increase</button>
          <button onClick={decrease} class="mt-4 btn btn-primary">Decrease</button>
        </div>
        <Itinerary days = {itineraryDays} />
        <button type="submit" class="mt-4 btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTripForm
