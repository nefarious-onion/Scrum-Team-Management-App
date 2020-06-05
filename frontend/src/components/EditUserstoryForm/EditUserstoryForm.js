import React, { useState } from 'react';
import './EditUserstoryForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faListUl, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const EditUserstoryForm = ({ onStoryDelete, onStoryUpdate, storyToEdit, onCloseEditForm }) => {
    const [titleToEdit, setTitleToEdit] = useState(storyToEdit.title);
    const [descrToEdit, setDescrToEdit] = useState(storyToEdit.descr);
    const [isTitleInputVisible, setIsTitleInputVisible] = useState(false);
    const [isTextareaVisible, setIsTextareaVisible] = useState(false);


    const onTitleClick = () => {
        setIsTitleInputVisible(true);
        setIsTextareaVisible(false);

    }
    const onDescrClick = () => {
        setIsTextareaVisible(true);
        setIsTitleInputVisible(false)
    }

    const onClickClose = () => {
        onCloseEditForm();
    }

    const onFormSubmit = event => {
        event.preventDefault();
        setIsTitleInputVisible(false);
    }
    const onInputBlur = () => {
        if (isTitleInputVisible) {
            setIsTitleInputVisible(false);
        }
        if (isTextareaVisible) {
            setIsTextareaVisible(false)
        }
    }

    return (
        <div className='form-overlay'>
            <div className='editform-container'>
                <div className='edit-panel' >
                    <h2>Edit userstory</h2>
                    <p></p>
                    <FontAwesomeIcon className='editform__move-btn' icon={faListUl} size='2x' />
                    <FontAwesomeIcon className='editform__delete-btn' icon={faTrashAlt} size='2x' />
                    <p></p>
                    <FontAwesomeIcon className='editform__close-btn' icon={faTimes} size='2x' onClick={onClickClose} />
                </div>
                <div className='edit-content'>
                    <form onSubmit={onFormSubmit}>
                        <h4 className='editform__header'>Title:</h4>
                        <div className='editform__story-title' onClick={onTitleClick}>
                            {!isTitleInputVisible
                                ? <label for='userstoryTitle' className='editform__label-title' >{titleToEdit}</label>
                                : null}
                            {isTitleInputVisible
                                ? <textarea
                                    className='editform__text-input'
                                    value={titleToEdit}
                                    name='userstoryTitle'
                                    onChange={event => setTitleToEdit(event.target.value)}
                                    onBlur={onInputBlur}
                                    autoFocus />
                                : null
                            }
                        </div>
                        <h4 className='editform__header'>Description:</h4>
                        <div className='editform__story-descr' onClick={onDescrClick}>
                            {!isTextareaVisible
                                ? <label for='userstoryDescr' className='editform__label-descr' >{descrToEdit}</label>
                                : null}
                            {isTextareaVisible
                                ? <textarea
                                    className='editform__textarea'
                                    name='userstoryDescr'
                                    value={descrToEdit}
                                    onChange={event => setDescrToEdit(event.target.value)}
                                    onBlur={onInputBlur}
                                    autoFocus />
                                : null}
                        </div>


                    </form>

                </div>
            </div>
        </div>

    );
}

export default EditUserstoryForm;
