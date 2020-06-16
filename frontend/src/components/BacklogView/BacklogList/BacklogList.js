import React from 'react';
import Userstory from '../../Userstory/Userstory';
import './BacklogList.css';

const BacklogList = ({ userstoryList, title, onStoryUpdate, getStoryForEdit, getStoryForDelete }) => {


    //checks that the list is not empty or undefined
    const isValid = userstoryList !== undefined && userstoryList.length > 0;

    const storyList = isValid
        ? userstoryList.map(story =>
            <Userstory
                key={story._id}
                title={story.title}
                id={story._id}
                desc={story.descr}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
                getStoryForDelete={getStoryForDelete}
            />)
        : <p>{title} is empty</p>;

    return (
        <div className='backloglist-container'>
            {storyList}
        </div>
    );

}
export default BacklogList;
