import React from 'react'
import axios from "../support-components/axios";


function AnswerRow(props) {

  const { _id, user, text, reported, createdAt, updatedAt, question } = props.data
  const onDelete = props.onDelete;

  const deleteAnswer = () => {
    axios.delete(`answer/${_id}`).then((res) => {
      console.log(res.data)
      onDelete()
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <tr>
      {user ? <th className="text-center" scope="row">{user.name}</th> : <th className='text-muted text-center'>User</th>}
      <td className="text-center">{text}</td>
      <td className="text-center">{question}</td>
      <td className="text-center">{`${reported}`}</td>
      <td className="text-center">{createdAt.substring(0, 10)}</td>
      <td className="text-center">{updatedAt.substring(0, 10)}</td>
      <td className="d-flex justify-content-center del-btn-border">
        <button type="button" style={{ cursor: 'pointer', color: 'red' }} onClick={e => { deleteAnswer() }} className="btn fa fa-trash fa-2x"></button>
      </td>
    </tr>
  )
}

export default AnswerRow
