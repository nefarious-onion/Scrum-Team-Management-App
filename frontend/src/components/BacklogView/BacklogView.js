import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import SprintList from './SprintList/SprintList';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import { getStories, getStory } from '../../services/api.service';

const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);

    //fetching all of the stories from back-end
    useEffect(() => {
        getStories()
            .then(stories => {
                console.log(stories)
                setBacklogList(stories)
                setSprintlogList(stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
    }, []);

    return (
        <div className="backlogview">
            <BacklogList backloglist={backlogList} />
            <SprintList sprintloglist={sprintlogList} />
        </div>
    );
}

export default BacklogView;
