import React from 'react';
import './Userstory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Userstory = ({ title, _id, desc, onStoryDelete, onStoryUpdate }) => {

    const onClickDelete = () => {
       const storyId = _id;
       console.log('clicked userstory', storyId);
       //defined in backlogview
       onStoryDelete(storyId);
    }
    const onClickEdit = () => {
        const storyId = _id;
        console.log('clicked userstory', storyId);
         //defined in backlogview
        onStoryUpdate(storyId);
    }
    
    return (
        <div className='userstory-container'>
             <FontAwesomeIcon icon={faEllipsisV} onClick={onClickEdit} />
            <p className='userstory-title'>{title}</p>
            <FontAwesomeIcon icon={faTimes} onClick={onClickDelete} />
        </div>
    );
}


export default Userstory;
