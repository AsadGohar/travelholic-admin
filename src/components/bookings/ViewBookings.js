import React, { useEffect, useState } from 'react';
import axios from '../axios';
import BookingTable from "./BookingTable";
import Table from 'react-bootstrap/Table';


const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/bookings')
            .then(res => {
                console.log(res.data);
                setBookings(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const DataTable = () => {
        return bookings.map((res, i) => {
            return <BookingTable data={res} key={i} />;
        });
    }



    return (
        <div className="container view-bookings-wrap">
            <div className="row bookings-table">
                <h5>Trip Bookings:</h5>

                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Seats</th>
                            <th>createdAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataTable()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ViewBookings;