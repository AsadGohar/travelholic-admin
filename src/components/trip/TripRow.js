import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TripRow(props) {
  const { _id,title} = props.data
  const onDelete = props.onDelete;
  const deleteQuestion = ()=>{
    axios.delete(`http://localhost:4000/api/trip/${_id}`).then((res)=>{
      console.log(res.data)
      onDelete()
    }).catch((err)=>{
      console.log(err)
    });
  }
  return (
      <tr>
        <th className="text-center" scope="row">{title}</th>
        <th className="text-center" scope="row"><Link to="/trip-edit">Edit</Link></th>
        <td className="d-flex justify-content-center del-btn-border"><button type="button" onClick={e=>{deleteQuestion()}} className="btn btn-danger del-btn-border">Delete</button></td>
      </tr>
  )
}

export default TripRow
