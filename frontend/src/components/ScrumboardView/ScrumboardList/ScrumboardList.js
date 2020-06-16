import React from 'react';
import Userstory from '../../Userstory/Userstory';
import './ScrumboardList.css'
import { Droppable } from 'react-beautiful-dnd';

const ScrumboardList = ({ scrumBoard, title, onStoryDelete, onStoryUpdate, getStoryForEdit, getStoryForDelete, id }) => {

    const isValid = scrumBoard !== undefined && scrumBoard.length > 0;
    const inScrumBoard = isValid
        ? scrumBoard.map((story, index) =>
            <Userstory
                key={story._id}
                id={story._id}
                index={index}
                title={story.title}
                desc={story.descr}
                onStoryDelete={onStoryDelete}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
                getStoryForDelete={getStoryForDelete}
            />
        )
        : <p>Nothing to display in {title}</p>
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div className="card-list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >

                    {inScrumBoard}
                    {provided.placeholder}
                </div>
            )}

        </Droppable>
    );
}

export default ScrumboardList;
