import React from 'react'
import axios, { imagePath } from "../support-components/axios"
import { Link } from 'react-router-dom'
import "../support-components/TableStyle.css"


function TripTable(props) {
  const trip = props.data
  const onDelete = props.onDelete;
  const deleteTrip = () => {
    axios.delete(`/trips/${trip._id}`).then((res) => {
      console.log(res.data)
      onDelete()
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <tr>
      <td scope="row">{trip._id}</td>
      <td scope="row">{trip.title}</td>
      <td scope="row">{trip.display_image}</td>
      <td scope="row">{trip.description}</td>
      <td scope="row">{trip.price}</td>
      <td scope="row">{trip.rating}</td>
      <td scope="row">{trip.attractions}</td>
      <td scope="row">{trip.excludes}</td>
      <td>
        <Link className="edit-link mr-2 ml-3" to={"/edit-trip/" + trip._id}>
          <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
        </Link>
        <i className='btn fa fa-trash fa-2x' onClick={e => { deleteTrip() }} style={{ cursor: 'pointer', color: 'red' }}></i>
      </td>
    </tr>
  )
}

export default TripTable
