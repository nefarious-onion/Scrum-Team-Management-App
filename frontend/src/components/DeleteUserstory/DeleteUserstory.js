import React from 'react';
import './DeleteUserstory.css'

const listStyles = {
    "current sprint": "currentSprint",
    "in progress": "inProgress",
    "in review": "inReview",
    "done": "done",
    "product backlog": "productBacklog",
    "sprint backlog": "sprintBacklog"
}

const DeleteUserstory = ({ listName, onStoryDelete, storyToDelete, onCloseDeleteStory, isEditVisible, onCloseEditForm }) => {

    const storyId = storyToDelete._id;
    const currentList = listName;
    const currentListStyle = listStyles[currentList];
    const onClickConfirmDelete = () => {
        onStoryDelete(storyId);
        onCloseDeleteStory();
        if (isEditVisible) {
            onCloseEditForm()
        }
    }

    const onClickCancelDelete = () => {
        onCloseDeleteStory();
    }

    return (
        <>
            <div className='form-overlay' onClick={onCloseDeleteStory} ></div>
            <div className={`delete-confirm ${currentListStyle}`}>
                <h2>Do you really want to delete this userstory: </h2>
                <p>{storyToDelete.title}</p>
                <button onClick={onClickConfirmDelete}>Yes</button>
                <button onClick={onClickCancelDelete}>Cancel</button>
            </div>
        </>
    );
}

export default DeleteUserstory;
