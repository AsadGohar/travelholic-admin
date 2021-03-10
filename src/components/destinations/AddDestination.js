import React, { useState } from 'react';
import axios from "../axios";
import { produce } from "immer";

const AddDestination = () => {

    // Setting up states
    const [title, setTitle] = useState('');
    const [titleImage, setTitleImage] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [guidelines, setGuidelines] = useState('');
    const [history, setHistory] = useState('');
    const [attractions, setAttractions] = useState([{title: "", path: ""}])
    const [photos, setPhotos] = useState([{ path: "" }]);

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

    // Functions for destination attractions
    const handleAddAttraction = () => {
        setAttractions(currentAttractions => [...currentAttractions, {title: "", path: ""}]);
        console.log(attractions);
    }
    // const handleRemoveAttraction = () => {
    //     setAttractions(currentAttractions =>
    //         currentAttractions.filter(a => a.index !== attractions.index));
    // }

    // Functions for destination photos
    const handleAddPhoto = () => {
        setPhotos(currentPhotos => [...currentPhotos, { path: "" }]);
        // console.log(photos)
    }
    // const handleRemovePhoto = () => {
    //     setPhotos(currentPhotos =>
    //         currentPhotos.filter(x => x.index !== photos.index)
    //     );
    // }


    const submitDestination = (e) => {
        e.preventDefault()

        const destinationObject = {
            title: title,
            title_image: titleImage,
            introduction: introduction,
            attraction_photos: attractions,
            photos: photos,
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
        setAttractions([{title: "", path: ""}]);
        setPhotos([{ path: "" }]);

        alert("Destination added!");
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

                        {/* INSERT ATTRACTION PHOTOS */}
                        <div className="form-group">
                            <label for="photos">Add attractions photos</label>
                            <div className="border border-dark">
                                {attractions.map((attraction, index) => (
                                    <div className="attractions-input-div p-3">
                                        <input type="text" className="form-control" value={attraction.title} onChange={e => {
                                            const title = e.target.value;
                                            setAttractions(currentAttractions => produce(currentAttractions, v => {
                                                v[index].title = title;
                                            }));
                                        }} placeholder="Attraction name"></input>
                                        
                                        <input type="text" className="form-control mt-1" value={attraction.path} onChange={e => {
                                            const path = e.target.value;
                                            setAttractions(currentAttractions => produce(currentAttractions, v => {
                                                v[index].path = path;
                                            }));
                                        }} placeholder="images/demo.jpg"></input>
                                    </div>
                                ))}
                                <button type="button" onClick={handleAddAttraction} className="btn btn-success mt-1 mb-3 ml-3">Add another attraction</button>
                                {/* <button className="btn btn-danger mt-1 mb-3 ml-3">Clear  <i onClick={handleRemoveAttraction} className="fa fa-trash" aria-hidden="true" /></button> */}
                            </div>
                        </div>

                        {/* INSERT PHOTOS */}
                        <div className="form-group">
                            <label for="photos">Add destination photos</label>
                            <div className="border border-dark">
                                {photos.map((photo, index) => (
                                    <div className="photos-input-div p-3">
                                        <input type="text" className="form-control" value={photo.path} onChange={e => {
                                            const path = e.target.value;
                                            setPhotos(currentPhotos => produce(currentPhotos, v => {
                                                v[index].path = path;
                                            }));
                                        }} placeholder="images/demo.jpg"></input>
                                    </div>
                                ))}
                                <button type="button" onClick={handleAddPhoto} className="btn btn-success mt-1 mb-3 ml-3">Add another photo</button>
                                {/* <button className="btn btn-danger mt-1 mb-3 ml-3">Clear  <i onClick={handleRemovePhoto} className="fa fa-trash" aria-hidden="true" /></button> */}
                            </div>
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
                        <button type="submit" className="btn btn-dark mb-5">Add destination</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDestination;