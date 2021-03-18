import React,{useState} from 'react'
import axios from 'axios'

import UserRow from './UserRow'

function UserTable() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get('http://localhost:4000/api/users/admin/users').then((res)=>{
      console.log(res.data)
      setUsers(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  React.useEffect(getUsers,[])
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Reported</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => { // using props in child component and looping
          return (
            <UserRow data={user} key={user._id} onDelete = {getUsers}/>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
