import React from 'react';
import './Userstory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';

const Userstory = ({ title, id, desc, onStoryDelete, getStoryForEdit, index }) => {

    const onClickDelete = () => {
        const storyId = id;
        console.log('clicked userstory', storyId);
        //defined in backlogview
        onStoryDelete(storyId);
    }
    const onClickEdit = () => {
        const storyId = id;
        console.log('clicked userstory', storyId);
        //sends userstoryId to backlogview
        getStoryForEdit(storyId);
    }

    return (
        <Draggable draggableId={id} index={index} >
            {(provided) => (
                <div className='userstory-container'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <FontAwesomeIcon icon={faEllipsisV} onClick={onClickEdit} />
                    <p className='userstory-title'>{title}</p>
                    <FontAwesomeIcon icon={faTimes} onClick={onClickDelete} />
                </div>
            )

            }

        </Draggable>
    );
}


export default Userstory;
