import React from 'react';
import './Userstory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';

const Userstory = ({ title, id, desc, getStoryForEdit, getStoryForDelete, index }) => {

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
        <Draggable draggableId={id} index={index} >
            {(provided) => (
                <div className='userstory-container'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >   <div onClick={onClickEdit}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                    <p className='userstory-title'>{title}</p>
                    <div onClick={onClickDelete} >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )

            }

        </Draggable>
    );
}


export default Userstory;
