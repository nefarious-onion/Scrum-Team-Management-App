import React, { useState, useFocus } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddUserstoryForm.css';

const AddUserstoryForm = ({ onStoryCreate, listId }) => {
    const [storyInput, setStoryInput] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        //input validation
        const isInputValid = storyInput.length > 4;

        if (isInputValid) {
            //save user input to an object
            const newStory = {
                title: String(storyInput)
            }
            //function defined in backlogview => makes axios.post api call
            onStoryCreate(listId, newStory);
            console.log('this is the new userstory', newStory);
            setStoryInput('');
        } else {
            console.log('userstory needs to be minimum of 5 characters')
        }
    }

    //controlled form: state gets the value from event.target.value / value is set to be the state
    const onInputChange = event => {
        const _storyInput = event.target.value;
        //user input is saved to the state
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
