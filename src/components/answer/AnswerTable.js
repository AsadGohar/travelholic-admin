import React, { useState } from 'react';
import axios from 'axios'

import AnswerRow from "./AnswerRow";

function AnswerTable() {
  const [answers, setAnswers] = useState([]);
  const getAnswers = () => {
    axios.get('http://localhost:4000/api/answer/admin').then((res)=>{
      console.log(res.data)
      setAnswers(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  React.useEffect(getAnswers,[setAnswers])
  return (
    <div className="container mt-4" >
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th  className="text-center" scope="col">Username</th>
            <th className="text-center" scope="col">Answer Text</th>
            <th className="text-center" scope="col">Reported</th>
            <th className="text-center" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {answers.map(answer => { // using props in child component and looping
              return (
                  <AnswerRow data={answer} key={answer.id} onDelete = {getAnswers}/>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AnswerTable
