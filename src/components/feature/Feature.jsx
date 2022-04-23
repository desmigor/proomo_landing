import React from 'react';
import './feature.css';

function Feature(props) {
    const title = props.title;
    const text = props.text;
    return (
        <div className="proomo__features-container__feature">
            <div className="proomo__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="proomo__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Feature
