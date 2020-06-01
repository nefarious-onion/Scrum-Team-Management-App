import React from 'react';
import Userstory from '../../Userstory/Userstory'
const Done = ({ done }) => {

    const isValid = done !== undefined && done.length > 0;
    const doneList = isValid
        ? done.map(story =>
            <Userstory key={story._id} _id={story._id} title={story.title} desc={story.descr} />
        )
        : <p>Sprint Backlog is empty</p>;
    return (
        <div>
            <h1>IM....DONE!</h1>
            {doneList}
        </div>
    );
}

export default Done;
