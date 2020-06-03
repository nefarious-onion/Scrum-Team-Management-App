import React from 'react';
import Userstory from '../../Userstory/Userstory'
const ScrumboardList = ({ scrumBoard, title }) => {
    const isValid = scrumBoard !== undefined && scrumBoard.length > 0;
    const inScrumBoard = isValid
        ? scrumBoard.map(story =>
            <Userstory key={story._id} id={story._id} title={story.title} desc={story.descr} />
        )
        : <p>Nothing to display in {title}</p>
    { console.log(title) };
    return (
        <div className="card">
            {inScrumBoard}
        </div>
    );
}

export default ScrumboardList;
