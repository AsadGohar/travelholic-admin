import React from 'react'

function RouteTable() {
  return (
    <div>
       <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Destination To : </th>
            <th scope="col">Destination From : </th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Lahore</th>
            <td>Islamabad</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">Lahore</th>
            <td>Islamabad</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Lahore</th>
            <td>Islamabad</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RouteTable
