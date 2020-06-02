import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddUserstoryForm.css';

const AddUserstoryForm = ({ onStoryCreate, isVisible }) => {
    const [storyInput, setStoryInput] = useState('');

    if(!isVisible) {
        return null;
    }

    const onSubmit = event => {
        event.preventDefault();

        //input validation
        const isInputValid = storyInput.length > 4;

        const newStory = {
            title: String(storyInput)
        }

        if (isInputValid) {
            onStoryCreate(newStory);
            console.log('this is the new userstory', newStory);
            setStoryInput('');

        } else {
            console.log('userstory needs to be minimum of 5 characters')
        }
    }

    //controlled form: state gets the value from event.target.value / value is set to be the state
    const onInputChange = event => {
        const _storyInput = event.target.value;
        setStoryInput(_storyInput);
    }

    console.log('render', storyInput.title);

    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <div className='form__input-field'>
                    <input
                        className='form__text-input'
                        type='text' 
                        name='title'
                        value={storyInput}
                        placeholder='Write a new userstory...'
                        onChange={onInputChange} required
                    />
                    <FontAwesomeIcon icon={faPlus} size='lg' onClick={onSubmit} />
                </div>

            </form>
        </div>
    );
}

export default AddUserstoryForm;
