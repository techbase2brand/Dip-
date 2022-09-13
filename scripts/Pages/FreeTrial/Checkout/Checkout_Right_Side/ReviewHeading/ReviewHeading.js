import React from 'react';
import './ReviewHeading.css';

const ReviewHeading = (props) => {
    return (
        <div className="review_heading">
            <div className="hori_line"></div>
            <p>{props.heading_text}</p>
            <div className="hori_line"></div>
        </div>
    )
}

export default ReviewHeading