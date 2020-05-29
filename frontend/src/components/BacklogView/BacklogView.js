import React, { useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList'
import SpritList from './SprintList/SprintList'
import {deleteStory, updateStory, getStories, getStory } from '../../services/api.service';

const BacklogView = () => {

    useEffect(() => {
        getStories().then(stories => console.log(stories));
        //getStory('5ecfde3b840b345154b88569').then(story => console.log(story));
        //deleteStory('5ecfdd89840b345154b8855d').then(story => console.log(story));
    }, []);


    return (
        <div>
            <BacklogList />
            <SpritList />
        </div>
    );
}

export default BacklogView;
