import React from 'react'

function UserTable() {
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Reported</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">A</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">B</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">C</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
