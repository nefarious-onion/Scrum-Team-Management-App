import React from 'react';
import Userstory from '../../Userstory/Userstory';
import './BacklogList.css';
import { Droppable } from 'react-beautiful-dnd';

const BacklogList = ({ userstoryList, title, onStoryUpdate, getStoryForEdit, getStoryForDelete, id }) => {


    //checks that the list is not empty or undefined
    const isValid = userstoryList !== undefined && userstoryList.length > 0;

    const storyList = isValid
        ? userstoryList.map((story, index) =>
            <Userstory
                key={story._id}
                title={story.title}
                id={story._id}
                index={index}
                desc={story.descr}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
                getStoryForDelete={getStoryForDelete}
            />)
        : <p>{title} is empty</p>;
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div className='backloglist-container'
                    ref={provided.innerRef}
                    {...provided.droppableProps}

                >
                    {storyList}
                    {provided.placeholder}
                </div>
            )}

        </Droppable>
    );

}
export default BacklogList;
