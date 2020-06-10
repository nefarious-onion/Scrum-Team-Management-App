import React from 'react';
import Userstory from '../../Userstory/Userstory';
import './BacklogList.css';

const BacklogList = ({ userstoryList, title, onStoryDelete, onStoryUpdate, getStoryForEdit }) => {
    //checks that the list is not empty or undefined
    const isValid = userstoryList !== undefined && userstoryList.length > 0;

    const storyList = isValid
        ? userstoryList.map(story =>
            <Userstory
                key={story._id}
                title={story.title}
                id={story._id}
                desc={story.descr}
                onStoryDelete={onStoryDelete}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
            />)
        : <p>{title} is empty</p>;

    return (
        <div className='backloglist-container'>
            {storyList}
        </div>
    );

}
export default BacklogList;
