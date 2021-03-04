import React,{useState} from 'react'
import axios from 'axios'

import QuestionRow from './QuestionRow'

function QuestionTable() {
  const [questions, setQuestions] = useState([]);
  const getQuestions = () => {
    axios.get('http://localhost:4000/api/question/admin').then((res)=>{
      console.log(res.data)
      setQuestions(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  React.useEffect(getQuestions,[])
  return (
    <div className="container mt-4" >
       <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="text-center" scope="col">Username</th>
            <th className="text-center" scope="col">Question Statment</th>
            <th className="text-center" scope="col">Reported</th>
            <th className="text-center" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {questions.map(question => { // using props in child component and looping
          return (
            <QuestionRow data={question} key={question.id} onDelete = {getQuestions}/>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default QuestionTable
