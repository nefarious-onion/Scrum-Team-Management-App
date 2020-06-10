import React from 'react';
import Userstory from '../../Userstory/Userstory';
import './ScrumboardList.css'

const ScrumboardList = ({ scrumBoard, title, onStoryDelete, onStoryUpdate, getStoryForEdit }) => {

    const isValid = scrumBoard !== undefined && scrumBoard.length > 0;
    const inScrumBoard = isValid
        ? scrumBoard.map(story =>
            <Userstory 
                key={story._id} 
                id={story._id} 
                title={story.title} 
                desc={story.descr}
                onStoryDelete={onStoryDelete}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
            />
        )
        : <p>Nothing to display in {title}</p>
    return (
        <div className="card-list">

            {inScrumBoard}
        </div>
    );
}

export default ScrumboardList;
