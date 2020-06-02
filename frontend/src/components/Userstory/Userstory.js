import React from 'react';
import './Userstory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Userstory = ({ title, _id, desc, onStoryDelete, onStoryUpdate }) => {

    const onDeleteClick = () => {
       const storyId = _id;
       console.log('clicked userstory', storyId);
       onStoryDelete(storyId);
    }
    const onEditClick = () => {
        const storyId = _id;
        console.log('clicked userstory', storyId);
        onStoryUpdate(storyId);
    }
    
    return (
        <div className='userstory-container'>
             <FontAwesomeIcon icon={faEllipsisV} onClick={onEditClick} />
            <p className='userstory-title'>{title}</p>
            <FontAwesomeIcon icon={faTimes} onClick={onDeleteClick} />
        </div>
    );
}


export default Userstory;
