import React from 'react';
import './Userstory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Userstory = ({ title, id, desc, getStoryForEdit, getStoryForDelete }) => {

    const onClickDelete = () => {
        const storyId = id;
        console.log('clicked userstory', storyId);
        //defined in backlogview
        getStoryForDelete(storyId);
    }
    const onClickEdit = () => {
        const storyId = id;
        console.log('clicked userstory', storyId);
        //sends userstoryId to backlogview
        getStoryForEdit(storyId);
    }

    return (
        <div className='userstory-container'>
            <div onClick={onClickEdit}>

                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            <p className='userstory-title'>{title}</p>
            <div onClick={onClickDelete} >

                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
}


export default Userstory;
