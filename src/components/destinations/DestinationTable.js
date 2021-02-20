import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";
import Button from 'react-bootstrap/Button';

const DestinationTable = (props) => {
    const { _id, title, title_image, rating, introduction, guidelines, history, is_trip_planner, createdAt, updatedAt } = props.data

    const deleteTransport = () => {
        axios.delete('/destinations/' + props.data._id)
            .then((res) => {
                console.log('Destination successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{title_image}</td>
            <td>{rating}</td>
            <td>{introduction}</td>
            <td>{guidelines}</td>
            <td>{history}</td>
            <td>{is_trip_planner}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td>
                <Link className="edit-link mr-2 ml-3" to={"/edit-destination/" + props.data._id}>
                    Edit
                </Link>
                <Button className="" onClick={deleteTransport} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default DestinationTable;