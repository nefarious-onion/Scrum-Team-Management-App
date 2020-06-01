import React from 'react';
import Userstory from '../../Userstory/Userstory'
const InReview = ({ inreview }) => {
    const isValid = inreview !== undefined && inreview.length > 0;
    const inreviewlist = isValid
        ? inreview.map(story =>
            <Userstory key={story._id} id={story._id} title={story.title} desc={story.descr} />)
        : <p>Inreview List is empty</p>;
    return (
        <div>
            <h1>IM....IN REVIEW</h1>
            {inreviewlist}
        </div>
    );
}

export default InReview;
