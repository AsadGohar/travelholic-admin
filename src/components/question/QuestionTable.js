import React from 'react'

function QuestionTable() {
  return (
    <div>
       <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Question Text</th>
            <th scope="col">Reported</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Asad</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">Shah</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">Safa</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default QuestionTable
