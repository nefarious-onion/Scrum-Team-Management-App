import React from 'react';
import Userstory from '../../Userstory/Userstory'
const SprintList = ({ sprintloglist }) => {
    //checks that the list is not empty or undefined
    const isValid = sprintloglist !== undefined && sprintloglist.length > 0;
    //mapping sprintloglist from back-end
    const storyList = isValid
        ? sprintloglist.map(story =>
        <Userstory key={story._id} _id={story._id} title={story.title} desc={story.descr} />
        )
        : <p>Sprint Backlog is empty</p>;
    return (
        <div>
            <h1>SprintList</h1>
            {storyList}
        </div >
    );
}

export default SprintList;
