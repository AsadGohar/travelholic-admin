import React, { useState } from 'react';
import axios from "../axios";

const AddDestination = () => {

// Setting up states
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [guidelines, setGuidelines] = useState('');
    const [history, setHistory] = useState('');

// Setting functions
const onChangeTitle = (e) => {
    setTitle(e.target.value);
}
const onChangeIntro = (e) => {
    setIntroduction(e.target.value);
}
const onChangeGuidelines = (e) => {
    setGuidelines(e.target.value);
}
const onChangeHistory = (e) => {
    setHistory(e.target.value);
}


const submitDestination = (e) => {
    e.preventDefault()

    const destinationObject = {
        title: title,
        introduction: introduction,
        guidelines: guidelines,
        history: history
    };

    axios.post('/destinations', destinationObject)
    .then(res => console.log(res.data));

    setTitle('');
    setIntroduction('');
    setGuidelines('');
    setHistory('');
}

    return (
        <div className="container add-destination-wrap">
            <div className="row">
                <h5 className="Display-1">Add new destination:</h5>
            </div>
            <div className="row add-destination-form-div mt-3">
                <div className="col-md-7">
                    <form onSubmit={submitDestination}>
                        <div className="form-group">
                            <label for="destination-title">Destination name</label>
                            <input type="text" className="form-control" id="destination-title" value={title} onChange={onChangeTitle} aria-describedby="destination title" placeholder="destination title" />
                        </div>
                        <div className="form-group">
                            <label for="title-image">Title Image</label><br/>
                            <input type="file"  id="title-image"  aria-describedby="destination image" />
                        </div>
                        <div className="form-group">
                            <label for="introduction">Introduction</label>
                            <input type="text" className="form-control" id="introduction" value={introduction} onChange={onChangeIntro} aria-describedby="destination intro" placeholder="Write short destination introduction" />
                        </div>
                        <div className="form-group">
                            <label for="guidelines">Guidelines</label>
                            <input type="text" className="form-control" id="guidelines" value={guidelines} onChange={onChangeGuidelines} aria-describedby="destination guidelines" placeholder="Write guidelines for destinations" />
                        </div>
                        <div className="form-group">
                            <label for="history">History</label>
                            <input type="text" className="form-control" id="history" value={history} onChange={onChangeHistory} aria-describedby="destination history" placeholder="Write history for destinations" />
                        </div>
                        <button type="submit" className="btn btn-dark">Add destination</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDestination;