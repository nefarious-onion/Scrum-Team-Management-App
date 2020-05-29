import React from 'react';
import Userstory from '../../Userstory/Userstory'
const SprintList = ({ sprintloglist }) => {
    //mapping sprintloglist from back-end
    const storyList = sprintloglist.map(story =>
        <Userstory key={story._id} _id={story._id} title={story.title} desc={story.descr} />
    )
    return (
        <div>
            <h1>SprintList</h1>
            {storyList}
        </div >
    );
}

export default SprintList;
