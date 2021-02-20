import React, { useState } from 'react';
import axios from "../axios";

const AddTransport = () => {

// Setting up states
    const [title, setTitle] = useState('');
    const [fare, setFare] = useState('');

// Setting functions
const onChangeTitle = (e) => {
    setTitle(e.target.value);
}
const onChangeFare = (e) => {
    setFare(e.target.value);
}


const submitTransport = (e) => {
    e.preventDefault()

    const TransportObject = {
        name: title,
        fare: fare
    };

    axios.post('/transports', TransportObject)
    .then(res => console.log(res.data));

    setTitle('');
    setFare('');
}

    return (
        <div className="container add-transport-wrap">
            <div className="row">
                <h5 className="Display-1">Add new transport service:</h5>
            </div>
            <div className="row add-transport-form-div mt-3">
                <div className="col-md-7">
                    <form onSubmit={submitTransport}>
                        <div className="form-group">
                            <label for="transport-title">Transport Title</label>
                            <input type="text" className="form-control" id="transport-title" value={title} onChange={onChangeTitle} aria-describedby="transport title" placeholder="Transport Title" />
                        </div>
                        <div className="form-group">
                            <label for="transport-fare">Fare</label>
                            <input type="number" className="form-control" id="transport-fare" value={fare} onChange={onChangeFare} aria-describedby="transport fare" placeholder="Enter fare in Rupees" />
                        </div>
                        <button type="submit" className="btn btn-dark">Add Transport</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTransport;