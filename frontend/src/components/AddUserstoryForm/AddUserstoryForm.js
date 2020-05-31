import React, { useState } from 'react';

const AddUserstoryForm = () => {
    const [storyInput, setStoryInput] = useState(undefined); 
    return (
        <div>
            <form>
                 <p>{storyInput}</p>
                <textarea name='storyInput' value={storyInput} onChange={event => setStoryInput(event.target.value)} required>
                </textarea>
                <input type='submit' value='Add new userstory'/>
            </form>
        </div>
    );
}

export default AddUserstoryForm;
