import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";
import Button from 'react-bootstrap/Button';

const TransportTable = (props) => {
    const { _id, name, fare, createdAt, updatedAt } = props.data

    const deleteTransport = () => {
        axios.delete('/transports/' + props.data._id)
            .then((res) => {
                console.log('Transport successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{fare}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td style={{columnWidth: 200}}>
                <Link className="edit-link mr-2 ml-3" to={"/editTransport/" + props.data._id}>
                    Edit
                    </Link>
                <Button className="" onClick={deleteTransport} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default TransportTable;