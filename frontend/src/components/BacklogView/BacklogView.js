import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import { getStories, getStory, createStory, deleteStory, updateStory } from '../../services/api.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './BacklogView.css';

const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [btnText, setBtnText] = useState('Add new userstory');

    //helper function for fetching stories from database
    // const fetchStories = async () => {
    //     const _stories = await getStories();
    //     setBacklogList(_stories);
    //     setSprintlogList(_stories);
    // }

    //event callback function for creating new userstories
    const onStoryCreate = async (storyInput) => {
        //create new story and save it to db with API post request
        //await createStory(newUserstory);
        //fetch updated information from db and re-render the lists
        //fetchStories();
        console.log('story was sent to backlogview', storyInput);
    }
    const onStoryDelete = async (storyId) => {
        //await deleteStory(storyId);
        console.log('this story will be deleted: ', storyId);
    }
    const onStoryUpdate = async (storyId) => {
        console.log('this story will be edited: ', storyId);
    }

    const showUserstoryForm = () => {
        if (!isVisible) {
            setIsVisible(true);
            setBtnText('Hide form');
        }
        if (isVisible) {
            setIsVisible(false);
            setBtnText('Add new userstory');
        }
        
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
        <div className="backlogview-container">
            <div className='backloglist-wrapper'>
                <div className='backloglist__header-wrapper'>
                    <FontAwesomeIcon icon={faEllipsisH} />
                    <h1 className='backloglist__header'>Product Backlog</h1>
                     <button className='add-userstory-btn' onClick={showUserstoryForm} >{btnText}</button>
                </div>

                <AddUserstoryForm onStoryCreate={onStoryCreate} isVisible={isVisible} />
                <BacklogList userstoryList={backlogList} title='Product Backlog' onStoryDelete={onStoryDelete} onStoryUpdate={onStoryUpdate}/>
            </div>
            <div className='backloglist-wrapper'>
                <h1 className='backloglist__header' >Sprint Backlog</h1>
                <BacklogList userstoryList={sprintlogList} title='Sprint Backlog' onStoryDelete={onStoryDelete} onStoryUpdate={onStoryUpdate}/>
            </div>

        </div>
    );
}

export default BacklogView;
