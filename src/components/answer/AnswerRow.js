import React from 'react'

function AnswerRow(props) {

  const { username,answer_text,reported,created,updated} = props.data
  return (
      <tr>
        <th scope="row">{username}</th>
        <td>{answer_text}</td>
        <td>{reported}</td>
        <td>{created}</td>
        <td>{updated}</td>
        <td>edit</td>
        <td>delete</td>
      </tr>
  )
}

export default AnswerRow
