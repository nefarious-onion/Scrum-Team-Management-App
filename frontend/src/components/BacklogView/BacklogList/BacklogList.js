import React from 'react';
import Userstory from '../../Userstory/Userstory'

const BacklogList = ({ backloglist }) => {
    //checks that the list is not empty or undefined
    const isValid = backloglist !== undefined && backloglist.length > 0;

    const storyList = isValid
        ? backloglist.map(story =>
            <Userstory key={story._id} title={story.title} _id={story._id} desc={story.descr} />)
        : <p>Product Backlog is empty</p>;

    return (
        <div>
            <h1>BacklogList</h1>
            {storyList}
        </div>
    );

}
export default BacklogList;
