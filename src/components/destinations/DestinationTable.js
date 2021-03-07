import React from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";
import Button from 'react-bootstrap/Button';

const DestinationTable = (props) => {
    const { _id, title, title_image, rating, introduction, attraction_photos, photos, guidelines, history, createdAt, updatedAt } = props.data
    const onDelete = props.onDelete;
    const deleteTransport = () => {
        axios.delete('/destinations/' + props.data._id)
            .then((res) => {
                console.log('Destination successfully deleted!')
                onDelete();
            }).catch((error) => {
                console.log(error)
            })
    }

    const attractions = attraction_photos.map(attraction => (
        <div key={attraction._id}>
            <p><b>Title:</b> {attraction.title}</p>
            <p>Path: {attraction.path}</p>
        </div>
    ))

    const photosList = photos.map(photo => (
        <div key={photo._id}>
            <p><b>Path:</b> {photo.path}</p>
        </div>
    ))

    return (
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>Path: {title_image}</td>
            {/* <td>{rating}</td> */}
            <td>{introduction}</td>
            <td>{attractions}</td>
            <td>{photosList}</td>
            <td>{guidelines}</td>
            <td>{history}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td style={{columnWidth: 200}}>
                <Link className="edit-link mr-2 ml-3" to={"/edit-destination/" + props.data._id}>
                    Edit
                </Link>
                <Button className="" onClick={e => {deleteTransport()}} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default DestinationTable;