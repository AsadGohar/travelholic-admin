import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";
import Button from 'react-bootstrap/Button';

const BookingTable = (props) => {
    const { _id, name, city, address, seats, createdAt } = props.data

    const deleteBooking = () => {
        axios.delete('/bookings/' + props.data._id)
            .then((res) => {
                console.log('Booking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{city}</td>
            <td>{address}</td>
            <td>{seats}</td>
            <td>{createdAt}</td>
            <td>
                <Link className="edit-link mr-2 ml-3" to={"/edit-booking/" + props.data._id}>
                    Edit
                </Link>
                <Button className="" onClick={deleteBooking} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default BookingTable;