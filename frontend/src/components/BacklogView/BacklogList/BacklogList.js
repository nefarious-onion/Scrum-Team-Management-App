import React from 'react';
import Userstory from '../../Userstory/Userstory'

const BacklogList = ({ backloglist }) => {
    const storyList = backloglist.map(story =>
        <Userstory key={story.id} title={story.title} id={story.id} />
    );
    return (
        <div>
            <h1>BacklogList</h1>
            {storyList}
        </div>
    );

}
export default BacklogList;
