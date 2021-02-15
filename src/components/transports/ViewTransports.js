import React, { useEffect, useState } from 'react';
import axios from '../axios';
import TransportTable from "./TransportTable";
import Table from 'react-bootstrap/Table';


const ViewTransports = () => {
    const [transports, setTransports] = useState([]);

    useEffect(() => {
        axios.get('/transports')
            .then(res => {
                console.log(res.data);
                setTransports(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const DataTable = () => {
        return transports.map((res, i) => {
            return <TransportTable data={res} key={i} />;
        });
    }



    return (
        <div className="container view-transports-wrap">
            <div className="row transports-table">
                <h5>Transport services:</h5>

                <Table stransported bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Fare</th>
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

export default ViewTransports;