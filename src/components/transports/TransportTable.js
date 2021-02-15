import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TransportTable = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.deleteProduct = this.deleteProduct.bind(;
    // }

    return (
        <tr>
            <td>{props.obj.id}</td>
            <td>{props.obj.name}</td>
            <td>{props.obj.fare}</td>
            <td>{props.obj.createdAt}</td>
            <td>{props.obj.updatedAt}</td>
            {/* <td>
                <Link className="edit-link" to={"/editproduct/" + props.obj._id}>
                    Edit
                    </Link>
                <Button onClick={deleteProduct} size="sm" variant="danger">Delete</Button>
            </td> */}
        </tr>
    );
}


export default TransportTable;