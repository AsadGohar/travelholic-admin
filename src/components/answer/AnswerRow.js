import React from 'react'
import axios from 'axios'

import './AnswerRow.css'

function AnswerRow(props) {

  const { _id,user,text,reported} = props.data
  const onDelete = props.onDelete;

  const deleteAnswer = ()=>{
    axios.delete(`http://localhost:4000/api/answer/${_id}`).then((res)=>{
      console.log(res.data)
      onDelete()
    }).catch((err)=>{
      console.log(err)
    });
  }
  return (
      <tr>
        <th className="text-center" scope="row">{user.name}</th>
        <td className="text-center">{text}</td>
        <td className="text-center">{`${reported}`}</td>
        <td className="d-flex justify-content-center del-btn-border"><button type="button" onClick={e=>{deleteAnswer()}} className="btn btn-danger del-btn-border">Delete</button></td>
      </tr>
  )
}

export default AnswerRow
