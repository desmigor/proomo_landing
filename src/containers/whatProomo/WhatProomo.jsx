import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatProomo.css';

function WhatProomo() {
    return (
        <div className="proomo__whatproomo section__margin" id="wproomo">
            <div className="proomo__whatproomo-feature">
                <Feature title="What is PROOMO" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className="proomo__whatproomo-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="proomo__whatproomo-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
            </div>
        </div>
    )
}

export default WhatProomo