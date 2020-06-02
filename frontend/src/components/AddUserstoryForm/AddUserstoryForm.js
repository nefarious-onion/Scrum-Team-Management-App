import React, { useState } from 'react';

const AddUserstoryForm = ({onStoryCreate}) => {
    const [storyInput, setStoryInput] = useState({});

    const onSubmit = event => {
        event.preventDefault();

        //input validation
        const isInputValid = storyInput.title.length > 4;

        if(isInputValid) {
            setStoryInput({});
            onStoryCreate(storyInput);
            console.log('this is the new userstory', storyInput);
        } else {
            console.log('userstory needs to be minimum of 5 characters')
        }
    }

    const onInputChange = event => {
        event.persist();
        setStoryInput(storyInput => ({...storyInput, [event.target.name]: event.target.value}));
        console.log(storyInput);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                 {/* <p>{storyInput.title}</p> */}
                <input  type='text' name='title' value={storyInput.title} onChange={onInputChange} required/>
                <input type='submit' value='Add new userstory'/>
            </form>
        </div>
    );
}

export default AddUserstoryForm;
