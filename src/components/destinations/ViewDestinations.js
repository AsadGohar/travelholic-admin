import React, { useEffect, useState } from 'react';
import axios from '../axios';
import DestinationTable from "./DestinationTable";
import Table from 'react-bootstrap/Table';


const ViewDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('/destinations')
            .then(res => {
                console.log(res.data);
                setDestinations(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const DataTable = () => {
        return destinations.map((res, i) => {
            return <DestinationTable data={res} key={i} />;
        });
    }



    return (
        <div className="container view-destinations-wrap">
            <div className="row destinations-table">
                <h5>Destinations:</h5>

                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Title Image</th>
                            {/* <th>Rating</th> */}
                            <th>Introduction</th>
                            <th>Attractions</th>
                            <th>Photos</th>
                            <th>Guidelines</th>
                            <th>History</th>
                            <th>Created At</th>
                            <th>Updated At</th>
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

export default ViewDestinations;