import React, { useEffect, useState } from 'react';
import axios from '../axios';
import HotelTable from "./HotelTable";
import Table from 'react-bootstrap/Table';


const ViewHotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('/hotels')
            .then(res => {
                console.log(res.data);
                setHotels(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const DataTable = () => {
        return hotels.map((res, i) => {
            return <HotelTable data={res} key={i} />;
        });
    }



    return (
        <div className="container view-hotels-wrap">
            <div className="row hotels-table">
                <h5>Hotels:</h5>

                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Hotel Name</th>
                            <th>Luxury Rent</th>
                            <th>Budget Rent</th>
                            <th>Contact Number</th>
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

export default ViewHotels;