import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "../support-components/axios";
import Button from 'react-bootstrap/Button';

const HotelTable = (props) => {
    const { _id, title, luxury_rent, budget_rent, contact_number } = props.data

    const deleteHotel = () => {
        axios.delete('/hotels/' + props.data._id)
            .then((res) => {
                console.log('Hotel successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{luxury_rent}</td>
            <td>{budget_rent}</td>
            <td>{contact_number}</td>
            <td style={{columnWidth: 200}}>
                <Link className="edit-link mr-2 ml-3" to={"/edit-hotel/" + props.data._id}>
                    Edit
                </Link>
                <Button className="" onClick={deleteHotel} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default HotelTable;