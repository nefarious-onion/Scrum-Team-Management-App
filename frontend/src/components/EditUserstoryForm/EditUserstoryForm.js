import React, { useState, useEffect } from 'react';
import './EditUserstoryForm.css';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faListUl, faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { UserstoryInfo } from '../../data_services/data-tooltips';

const listStyles = {
    "current sprint": "currentSprint",
    "in progress": "inProgress",
    "in review": "inReview",
    "done": "done",
    "product backlog": "productBacklog",
    "sprint backlog": "sprintBacklog"
}

const EditUserstoryForm = ({ onFormDeleteStory, onStoryUpdate, storyToEdit, onCloseEditForm, listName }) => {
    const [titleToEdit, setTitleToEdit] = useState('');
    const [descrToEdit, setDescrToEdit] = useState('');
    const [isTitleInputVisible, setIsTitleInputVisible] = useState(false);
    const [isTextareaVisible, setIsTextareaVisible] = useState(false);
    const [isSaveVisible, setIsSaveVisible] = useState(false);
    const storyId = storyToEdit._id;
    const currentList = listName;
    const currentListStyle = listStyles[currentList];

    //makes sure state is not undefined if there is no title/descr
    useEffect(() => {
        if (storyToEdit.title) {
            setTitleToEdit(storyToEdit.title)
        }
        if (storyToEdit.descr) {
            setDescrToEdit(storyToEdit.descr)
        }
    }, []);

    const showSaveMessage = () => {
        setIsSaveVisible(true);
        const saveTimer = setTimeout(() => setIsSaveVisible(false), 2000);
    }

    //shows the title input field when text is clicked
    const onTitleClick = () => {
        setIsTitleInputVisible(true);
        setIsTextareaVisible(false);
    }
    //shows the description input field when text is clicked
    const onDescrClick = () => {
        setIsTextareaVisible(true);
        setIsTitleInputVisible(false)
    }

    //sets isEditVisible-state in backlogview to false when close-button is clicked
    //=> renders edit form to null
    const onClickClose = () => {
        onCloseEditForm();
    }

    //hides input fields when they are no longer in focus
    //saves changed story to database
    const onInputBlur = () => {
        if (isTitleInputVisible) {
            setIsTitleInputVisible(false);
        }
        if (isTextareaVisible) {
            setIsTextareaVisible(false)
        }
        const story = { title: titleToEdit, descr: descrToEdit };
        onStoryUpdate(storyId, story);
        console.log('edit form edited story:', story);
        showSaveMessage();
    }
    //pressing enter removes focus from the input field
    const onEnterPress = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            onInputBlur();
        }
    }
    //hides input fields and
    //saves changes to database on submit
    const onFormSubmit = event => {
        event.preventDefault();
        setIsTitleInputVisible(false);
        setIsTextareaVisible(false);

        const story = { title: titleToEdit, descr: descrToEdit };
        onStoryUpdate(storyId, story);
        console.log('edit form edited story:', storyId, story);
        showSaveMessage();
    }

    //deletes the userstory when trashcan is clicked => no confirmation, the form just closes. Needs a fix.
    const onClickDelete = () => {
        onFormDeleteStory(storyToEdit)
    }

    return (
        <>
            <div className='form-overlay' onClick={onCloseEditForm} ></div>
            <div className={`editform-container ${currentListStyle}`}>
                <div className='edit-panel' >
                    <h2>Edit user story</h2>
                    <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='userstory' />
                    <ReactTooltip id='userstory' place='bottom' className='tooltip'>
                        <UserstoryInfo />
                    </ReactTooltip>
                    <p>{currentList}</p>
                    <FontAwesomeIcon className='editform__move-btn' icon={faListUl} size='2x' />
                    <FontAwesomeIcon className='editform__delete-btn' icon={faTrashAlt} size='2x' onClick={onClickDelete} />
                    <FontAwesomeIcon className='editform__close-btn' icon={faTimes} size='2x' onClick={onClickClose} />
                </div>
                <div className='edit-content'>
                { isSaveVisible ? <span className='save-message' >User story saved</span> : null}
                    <form onSubmit={onFormSubmit}>
                        <h4 className='editform__header'>Title:</h4>
                        <div className='editform__story-title' onClick={onTitleClick}>
                            {isTitleInputVisible
                                ? <textarea
                                    className='editform__text-input'
                                    value={titleToEdit}
                                    name='userstoryTitle'
                                    onChange={event => setTitleToEdit(event.target.value)}
                                    onKeyDown={onEnterPress}
                                    onBlur={onInputBlur}
                                    autoFocus />
                                : <label htmlFor='userstoryTitle' className='editform__label-title' >{titleToEdit}</label>
                            }
                        </div>
                        <h4 className='editform__header'>Description:</h4>
                        <div className='editform__story-descr' onClick={onDescrClick}>
                            {isTextareaVisible
                                ? <textarea
                                    className='editform__textarea'
                                    name='userstoryDescr'
                                    value={descrToEdit}
                                    onChange={event => setDescrToEdit(event.target.value)}
                                    onKeyDown={onEnterPress}
                                    onBlur={onInputBlur}
                                    autoFocus />
                                : <label htmlFor='userstoryDescr' className='editform__label-descr' >{descrToEdit}</label>
                            }
                        </div>


                    </form>

                </div>
            </div>
        </>


    );
}

export default EditUserstoryForm;
