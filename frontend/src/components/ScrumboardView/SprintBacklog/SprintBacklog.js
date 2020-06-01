import React from 'react';
import Userstory from '../../Userstory/Userstory'


const SprintBacklog = ({ sprintlog }) => {
    const isValid = sprintlog !== undefined && sprintlog.length > 0;
    const sprintbacklog = isValid
        ? sprintlog.map(story =>
            <Userstory key={story._id} id={story._id} title={story.title} desc={story.descr} />
        )
        : <p>Sprint Backlog is empty</p>;
    return (
        <div>
            <h1> IM JUST SPRINT LIST</h1>
            {sprintbacklog}
        </div>
    );
}

export default SprintBacklog;
