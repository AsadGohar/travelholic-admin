import React, { useState } from 'react';

import AnswerRow from "./AnswerRow";

function AnswerTable() {
  const [answers, setAnswers] = useState([
    {
      id:1,
      username:'Asad',
      answer_text: 'This is first list',
      reported:'true',
      created:'15-19-07',
      updated:'15-19-07'
    },
    {
      id:2,
      username:'Shah',
      answer_text: 'This is first list',
      reported:'false',
      created:'15-19-07',
      updated:'15-19-07'
    },
    {
      id: 3,
      username:'Safa',
      answer_text: 'This is first list',
      reported:'false',
      created:'15-19-07',
      updated:'15-19-07'
    },
  ]);
  return (
    <div>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Answer Text</th>
            <th scope="col">Reported</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {answers.map(answer => { // using props in child component and looping
              return (
                  <AnswerRow data={answer} id={answer.id}/>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AnswerTable
