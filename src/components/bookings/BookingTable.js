import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";
import Button from 'react-bootstrap/Button';

const BookingTable = (props) => {
    const { _id, title, name, email, city, address, phoneNo, seats, paymentMethod, totalPrice, isPaid, booking_confirmed, createdAt } = props.data
    const onDelete = props.getBookings

    const deleteBooking = () => {
        axios.delete('/bookings/' + props.data._id)
            .then((res) => {
                console.log('Booking successfully deleted!')
                onDelete()
            }).catch((error) => {
                console.log(error)
            })
    }

    const confirmBooking = () => {
        // Booking Confirmation fucntion
    }

    return (
        <tr>
            <td>{_id}</td>
            <td style={{fontWeight: 'bold'}}>{title}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{address}</td>
            <td>{phoneNo}</td>
            <td>{seats}</td>
            <td>{totalPrice}</td>
            <td>{isPaid ? <p style={{fontWeight: 'bold'}}>{paymentMethod}</p> : <p style={{fontWeight: 'bold'}}>Not Paid</p>}</td>
            <td>{isPaid ? <p style={{color: 'green'}}>Paid</p> : <p style={{color: 'red'}}>Pending</p>}</td>
            <td>{booking_confirmed ? <p style={{color: 'green'}}>Confirmed</p> : <p style={{color: 'red'}}>Not Confirmed</p>}</td>
            <td>{booking_confirmed ? <Button className="disabled" style={{pointerEvents: 'none'}} size="sm" variant="success">Confirm</Button> :
            <Button  onClick={confirmBooking} size="sm" variant="success">Confirm</Button>}</td>
            <td>{createdAt.substring(0, 10)}</td>
            <td>
                <i className='btn fa fa-trash fa-2x' onClick={deleteBooking} style={{cursor: 'pointer', color: 'red'}}></i>
            </td>
        </tr>
    );
}

export default BookingTable;