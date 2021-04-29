import React, { useState } from 'react'
import axios from 'axios'

import Itinerary from './Itinerary'

function AddTripForm() {
  const [itineraryDays, setItineraryDays] = useState(0)
  const [itinerary, setItinerary] = useState([])
  const [data, setData] = useState({
    title: '',  
    price: '',
    description: '',
    rating: '',
    attractions: '',
    excludes: '',
    service_provided: '',
    start_date: '',
    end_date: ''
  })
  const list = []
  const itineraryData = []

  const pushToItineraryDataArray = (x, y) => {
    var json = { day: x, description: y }
    itineraryData.push(json)
  }
  const formRender = (days) => {
    for (let index = 1; index <= days; index++) {
      list.push(
        <div key={index} className="form-group">
          <label>Day : {index}</label>
          <input type="text" className="input-x form-control" />
        </div>
      )
    }
  }
  const onSave = (e) => {
    e.preventDefault()
    for (let index = 0; index < itineraryDays; index++) {
      var inputText = document.getElementsByClassName("input-x form-control")[index].value
      pushToItineraryDataArray(index, inputText)
    }
    //console.log("onSave data" , data)
    setItinerary(itineraryData);
    console.log("onSave itinerary data", itineraryData)
    console.log("onSave itinerary useState", itinerary)
  }

  // const setItinerary = (x)=>{
  //   console.log('in set iti')
  //   console.log('x' , x)
  //   setData({...data,itinerary:x})

  //   console.log(data)
  // }
  const increase = (e) => {
    e.preventDefault()
    setItineraryDays(itineraryDays + 1)
  }
  const decrease = (e) => {
    e.preventDefault()
    setItineraryDays(itineraryDays - 1)
  }
  const onS = (e) => {
    e.preventDefault()
    console.log(itinerary)
  }
  return (
    <div>
      <h5 className="Display-1">Add a new trip:</h5>
      <div className="row">
        <div className="col-md-7">
          <form className="container mt-2 pt-2 pb-4">
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" placeholder='Trip Title' />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" placeholder='Trip Price e.g 15000' />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" placeholder='Description (max 120 words)' />
            </div>
            <div className="form-group">
              <label>Attractions</label>
              <input type="text" className="form-control" placeholder='Describe trip atrractions' />
            </div>
            <div className="form-group">
              <label>Excludes</label>
              <input type="text" className="form-control" placeholder='Trip exludes' />
            </div>
            <div className="form-group">
              <label>Services Provided</label>
              <input type="text" className="form-control" placeholder='Describe services to be provided' />
            </div>
            {/* <div className="form-group">
              <label>Start Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input type="date" className="form-control" />
            </div> */}
            <div className="form-group">
              <h5>Itinerary Days : {itineraryDays}</h5>
              <button onClick={increase} className="mt-4 btn btn-primary mr-2">Increase</button>
              <button onClick={decrease} className="mt-4 btn btn-primary">Decrease</button>
            </div>
            {/* <Itinerary set={setItinerary} days = {itineraryDays} /> */}
            {formRender(itineraryDays)}
            <div className="container mt-4 border border-dark pt-2 pb-4">
              <h3>Add Itinerary</h3>
              <div className="form-group">
                {list}
              </div>
              <button onClick={onSave} className="mt-4 btn btn-warning">Save</button>
            </div>
            <button type="submit" onClick={onS} className="mt-4 btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTripForm
