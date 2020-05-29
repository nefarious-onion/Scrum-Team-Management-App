import React from 'react';
import Userstory from '../../Userstory/Userstory'
const SprintList = ({ backloglist }) => {

    const storyList = backloglist.map(story =>
        <Userstory key={story.id} id={story.id} title={story.title} />
    )
    return (
        <div>
            <h1>SprintList</h1>
            {storyList}
        </div >
    );
}

export default SprintList;
