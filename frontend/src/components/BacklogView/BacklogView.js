import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import SprintList from './SprintList/SprintList';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import { getStories, getStory, createStory } from '../../services/api.service';
import './BacklogView.css';

const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);

    //helper function for fetching stories from database
    const fetchStories = async () => {
        const _stories = await getStories();
        setBacklogList(_stories);
        setSprintlogList(_stories);
    }

    //event callback function for creating new userstories
    const onStoryCreate = async (storyInput) => {


        //create new story and save it to db with API post request
        //await createStory(newUserstory);
        //fetch updated information from db and re-render the lists
        //fetchStories();
        console.log('story was sent to backlogview', storyInput);
    }

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
            <AddUserstoryForm onStoryCreate={onStoryCreate}/>
            <BacklogList backloglist={backlogList} />
            <SprintList sprintloglist={sprintlogList} />
        </div>
    );
}

export default BacklogView;
