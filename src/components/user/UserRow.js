import React from 'react'
import axios from 'axios'

function UserRow(props) {
  const { _id,updatedAt,createdAt,name,reported} = props.data
  const onDelete = props.onDelete;
  const deleteQuestion = ()=>{
    axios.delete(`http://localhost:4000/api/users/${_id}`).then((res)=>{
      console.log(res.data)
      onDelete()
    }).catch((err)=>{
      console.log(err)
    });
  }
  return (
    <tr>
      <th className="text-center" scope="row">{name}</th>
      <td className="text-center">{`${reported}`}</td>
      <td className="text-center">{createdAt}</td>
      <td className="text-center">{updatedAt}</td>
      <td className="d-flex justify-content-center del-btn-border"><button type="button" onClick={e=>{deleteQuestion()}} className="btn btn-danger del-btn-border">Delete</button></td>
    </tr>
  )
}

export default UserRow
