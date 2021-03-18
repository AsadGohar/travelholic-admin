import React from 'react'
import axios from 'axios'

function RouteRow(props) {
  
  const { _id,destination_to,destination_from} = props.data
  const onDelete = props.onDelete;

  const deleteAnswer = ()=>{
    axios.delete(`http://localhost:4000/api/routes/${_id}`).then((res)=>{
      console.log(res.data)
      onDelete()
    }).catch((err)=>{
      console.log(err)
    });
  }

  return (
    <tr>
      <th className="text-center" scope="row">{destination_to.title}</th>
      <td className="text-center">{destination_from.title}</td>
      <td className="d-flex justify-content-center del-btn-border"><button type="button" onClick={e=>{deleteAnswer()}} className="btn btn-danger del-btn-border">Delete</button></td>
    </tr>
  )
}

export default RouteRow
