import React from 'react';
import Userstory from '../../Userstory/Userstory'

const BacklogList = ({ backloglist }) => {
    const storyList = backloglist.map(story =>
        <Userstory key={story._id} title={story.title} _id={story._id} desc={story.descr} />
    );
    return (
        <div>
            <h1>BacklogList</h1>
            {storyList}
        </div>
    );

}
export default BacklogList;
