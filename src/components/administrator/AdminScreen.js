import React from 'react'

// Components of Admin Screen Imported Here
import AdminList from "./AdminList"
import CreateAdmin from "./CreateAdmin"

const ViewAdmins = () => {
    return (
        <div className="ml-2">
            <div className="authorized-admin-div">
                <AdminList />
            </div>
            <hr />
            <div className="create-admin-div">
                <CreateAdmin />
            </div>
        </div>
    )
}

export default ViewAdmins
