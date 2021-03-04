import React, { useState } from 'react';
import axios from "../axios";

const AddDestination = () => {

    // Setting up states
    const [title, setTitle] = useState('');
    const [titleImage, setTitleImage] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [guidelines, setGuidelines] = useState('');
    const [history, setHistory] = useState('');
    const [photos, setPhotos] = useState(['']);

    // Setting functions
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeTitleImage = (e) => {
        setTitleImage(e.target.value);
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
    const onChangePhotos = (e) => {
        setPhotos(e.target.value);
    }
    const handleAddPhoto = () => {
        setPhotos(photos => [...photos, ''])
    }


    const submitDestination = (e) => {
        e.preventDefault()

        const destinationObject = {
            title: title,
            title_image: titleImage,
            introduction: introduction,
            guidelines: guidelines,
            history: history
        };

        axios.post('/destinations', destinationObject)
            .then(res => console.log(res.data));

        setTitle('');
        setTitleImage('');
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
                        {/* SET DESTINATION NAME */}
                        <div className="form-group">
                            <label for="destination-title">Destination name</label>
                            <input type="text" className="form-control" id="destination-title" value={title} onChange={onChangeTitle} aria-describedby="destination title" placeholder="destination title" />
                        </div>

                        {/* SET TITLE IMAGE */}
                        <div className="form-group">
                            <label for="title-image">Title Image</label><br />
                            <input type="text" className="form-control" id="title-image" value={titleImage} onChange={onChangeTitleImage} aria-describedby="destination image" placeholder="Write image path e.g images/abc.jpg" />
                        </div>

                        {/* SET INTRO */}
                        <div className="form-group">
                            <label for="introduction">Introduction</label>
                            <input type="text" className="form-control" id="introduction" value={introduction} onChange={onChangeIntro} aria-describedby="destination intro" placeholder="Write short destination introduction (max 150 words)" />
                        </div>

                        {/* INSET PHOTOS */}
                        <div className="form-group">
                            <label for="photos">Add Destination Photos</label>
                            {photos.map(photo => (
                                <div className="photos-input-div border border-dark p-3">
                                    <input type="text" className="form-control" value={photo} onChange={onChangePhotos} placeholder="images/demo.jpg"></input>
                                    
                                </div>
                            ))}
                            <button type="button" onClick={handleAddPhoto} className="btn btn-success mt-3">Add photo</button>
                        </div>

                        {/* SET GUIDELINES */}
                        <div className="form-group">
                            <label for="guidelines">Guidelines</label>
                            <input type="text" className="form-control" id="guidelines" value={guidelines} onChange={onChangeGuidelines} aria-describedby="destination guidelines" placeholder="Write guidelines for destinations" />
                        </div>

                        {/* SET HISTORY */}
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