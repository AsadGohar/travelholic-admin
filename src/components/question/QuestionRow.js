import React from 'react'
import axios from 'axios'

function QuestionRow(props) {
  
  const { _id,user,statement,reported} = props.data
  const onDelete = props.onDelete;

  const deleteQuestion = ()=>{
    axios.delete(`http://localhost:4000/api/question/${_id}`).then((res)=>{
      console.log(res.data)
      onDelete()
    }).catch((err)=>{
      console.log(err)
    });
  }
  return (
      <tr>
        <th className="text-center" scope="row">{user.name}</th>
        <td className="text-center">{statement}</td>
        <td className="text-center">{`${reported}`}</td>
        <td className="d-flex justify-content-center del-btn-border"><button type="button" onClick={e=>{deleteQuestion()}} className="btn btn-danger del-btn-border">Delete</button></td>
      </tr>
  )
}

export default QuestionRow
