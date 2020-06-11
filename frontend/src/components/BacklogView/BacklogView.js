import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import EditUserstoryForm from '../EditUserstoryForm/EditUserstoryForm';
import { getStory, createStory, deleteStory, updateStory } from '../../api_services/userstory.service';
import { backlogId, sprintlogId } from '../../api_services/config';
import { getList, getLists } from '../../api_services/scrumlist.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './BacklogView.css';
import { ReactSortable } from "react-sortablejs";

const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);

    const [currentList, setCurrentList] = useState('');
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [btnText, setBtnText] = useState('Add new userstory');
    const [storyToEdit, setStoryToEdit] = useState('');

    //helper function for fetching stories from database and re-rendering the component
    const fetchLists = async () => {
        const _backlogList = await getList(backlogId);
        const _sprintlogList = await getList(sprintlogId);
        //sort the lists!!
        setBacklogList(_backlogList.stories);
        setSprintlogList(_sprintlogList.stories);
    }

    //event callback function for creating new userstories
    const onStoryCreate = async (listId, storyInput) => {
        //create new story and save it to db with API post request
        await createStory(listId, storyInput);
        //fetch updated information from db and re-render the lists
        fetchLists();
    }
    //deletes userstory and re-renders lists
    const onStoryDelete = async (storyId) => {
        await deleteStory(storyId);
        fetchLists();
    }
    // get story to edit, open edit form
    const getStoryForEdit = async (storyId, listName) => {
        const _storyToEdit = await getStory(storyId);
        if (_storyToEdit) {
            setStoryToEdit(_storyToEdit);
            setCurrentList(listName);
            setIsEditVisible(true);
        } else {
            throw new Error('Something went wrong: Story was not found')
        }
    };
    //save edited userstory in edit form
    const onStoryUpdate = async (storyId, updatedStory) => {
        await updateStory(storyId, updatedStory);

        console.log('this story was edited: ', updatedStory);
    }

    const showUserstoryForm = () => {
        if (!isAddFormVisible) {
            setIsAddFormVisible(true);
            setBtnText('Hide form');
        }
        if (isAddFormVisible) {
            setIsAddFormVisible(false);
            setBtnText('Add new userstory');
        }
    }
    const onCloseEditForm = () => {
        setIsEditVisible(false);
        setStoryToEdit('');
        fetchLists();
    }

    //fetching all of the stories once when component is rendered
    useEffect(() => {
        getLists()
            .then(lists => console.log(lists));

        //sort the lists!!
        getList(backlogId)
            .then(list => {
                console.log(list.title)
                setBacklogList(list.stories)
            })
            .catch((error) => {
                console.log(new Error(error))
            })
        getList(sprintlogId)
            .then(list => {
                console.log(list.title)
                setSprintlogList(list.stories)
            })
            .catch((error) => {
                console.log(new Error(error))
            })
    }, []);

    return (
        <>
            {isEditVisible ? < EditUserstoryForm listName={currentList} onStoryDelete={onStoryDelete} onStoryUpdate={onStoryUpdate} storyToEdit={storyToEdit} onCloseEditForm={onCloseEditForm} /> : null}
            <div className="backlogview-container">
                <div className='backloglist-wrapper productBacklog-light'>
                    <div className='backloglist__header-wrapper'>
                        <FontAwesomeIcon icon={faEllipsisH} />
                        <h1 className='backloglist__header'>Product Backlog</h1>
                        <button className='add-userstory-btn' onClick={showUserstoryForm} >{btnText}</button>
                    </div>
                    {isAddFormVisible ? <AddUserstoryForm onStoryCreate={onStoryCreate} listId={backlogId} /> : null}

                    <BacklogList
                        userstoryList={backlogList}
                        title='Product Backlog'
                        onStoryDelete={onStoryDelete}
                        getStoryForEdit={storyId => getStoryForEdit(storyId, 'product backlog')}
                    />

                </div>
                <div className='backloglist-wrapper sprintBacklog-light'>
                    <div className='backloglist__header-wrapper'>
                        <FontAwesomeIcon icon={faEllipsisH} />
                        <h1 className='backloglist__header'>Sprint Backlog</h1>
                        <button className='add-userstory-btn' onClick={showUserstoryForm} >{btnText}</button>
                    </div>
                    {isAddFormVisible ? <AddUserstoryForm onStoryCreate={onStoryCreate} listId={sprintlogId} /> : null}
                    {/* <h1 className='backloglist__header' >Sprint Backlog</h1> */}
                    <BacklogList
                        userstoryList={sprintlogList}
                        title='Sprint Backlog'
                        onStoryDelete={onStoryDelete}
                        g getStoryForEdit={storyId => getStoryForEdit(storyId, 'sprint backlog')}
                    />
                </div>
            </div>
        </>
    );
}

export default BacklogView;
