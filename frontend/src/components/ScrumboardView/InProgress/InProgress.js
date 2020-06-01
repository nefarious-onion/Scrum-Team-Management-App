import React from 'react';
import Userstory from '../../Userstory/Userstory';

const InProgress = (inprogress) => {
    const isValid = inprogress !== undefined && inprogress.length > 0;
    const inprogressList = isValid
        ? inprogress.map(story =>
            <Userstory key={story._id} _id={story._id} title={story.title} desc={story.descr} />
        )
        : <p>nothing in progress</p>
    return (
        <div>
            <h1>IM... IN PROGRESS</h1>
            {inprogressList}
        </div>
    );
}

export default InProgress;
