import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import EditUserstoryForm from '../EditUserstoryForm/EditUserstoryForm';
import DeleteUserstory from '../DeleteUserstory/DeleteUserstory'
import { getStory, createStory, deleteStory, updateStory } from '../../api_services/userstory.service';
import { backlogId, sprintlogId } from '../../api_services/config';
import { getList, getLists } from '../../api_services/scrumlist.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import './BacklogView.css';
import { ProductBacklogInfo, SprintBacklogInfo } from '../../data_services/data-tooltips';
import { DragDropContext } from 'react-beautiful-dnd';


const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);

    const [currentList, setCurrentList] = useState('');
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [isAddFormVisibleForSprint, setIsAddFormVisibleForSprint] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [btnText, setBtnText] = useState('Add new userstory');
    const [btnTextForSprint, setBtnTextForSprint] = useState('Add new userstory');
    const [storyToEdit, setStoryToEdit] = useState('');
    const [storyToDelete, setStoryToDelete] = useState('');

    const getListById = id => {
        switch (id) {
            case backlogId:
                return backlogList;
            case sprintlogId:
                return sprintlogList;
            default:
                break;
        }
    }
    const setListById = (listId, newArray) => {
        switch (listId) {
            case backlogId:
                setBacklogList(newArray);
                break;
            case sprintlogId:
                setSprintlogList(newArray);
                break;
            default:
                break;
        }
    }

    //helper function for fetching stories from database and re-rendering the component
    const fetchLists = async () => {
        const _backlogList = await getList(backlogId);
        const _sprintlogList = await getList(sprintlogId);

        setBacklogList(_backlogList.stories);
        setSprintlogList(_sprintlogList.stories);
    }

    const onDragEnd = async (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        //check the userstory actually moved
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const listDraggedFrom = getListById(source.droppableId);
        const listDraggedTo = getListById(destination.droppableId);

        //move userstory within one list
        if (listDraggedFrom === listDraggedTo) {
            const newDraggedFromAndToList = Array.from(listDraggedFrom);
            //array destructuring => splice returns an array of 1 item = draggedstory
            const [draggedStory] = newDraggedFromAndToList.splice(source.index, 1);
            console.log('dtagged story: ', draggedStory);
            newDraggedFromAndToList.splice(destination.index, 0, draggedStory);

            setListById(destination.droppableId, newDraggedFromAndToList);
        } else {
            //move userstory between lists
            const newDraggedFromList = Array.from(listDraggedFrom);
            const [draggedStory] = newDraggedFromList.splice(source.index, 1);
            const newDraggedToList = Array.from(listDraggedTo);
            newDraggedToList.splice(destination.index, 0, draggedStory);

            setListById(source.droppableId, newDraggedFromList);
            setListById(destination.droppableId, newDraggedToList);
        }
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
        setIsDeleteVisible(false);
        setStoryToDelete('')
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
    }
    // get story to delete and open confirmation
    const getStoryForDelete = async (storyId, listName) => {
        const _storyToDelete = await getStory(storyId);
        if (_storyToDelete) {
            setStoryToDelete(_storyToDelete);
            setCurrentList(listName);
            setIsDeleteVisible(true);
        } else {
            throw new Error('Something went wrong: Story was not found')
        }
    };


    //save edited userstory in edit form
    const onStoryUpdate = async (storyId, updatedStory) => {
        await updateStory(storyId, updatedStory);
        console.log('this story was edited: ', updatedStory);
    }

    const showUserstoryForm = (button) => {
        if (button === 'backlog') {
            if (!isAddFormVisible) {
                setIsAddFormVisible(true);
                setBtnText('Hide form');
            }
            if (isAddFormVisible) {
                setIsAddFormVisible(false);
                setBtnText('Add new userstory');
            }
        }
        if (button === 'sprint') {
            if (!isAddFormVisibleForSprint) {
                setIsAddFormVisibleForSprint(true);
                setBtnTextForSprint('Hide form');
            }
            if (isAddFormVisibleForSprint) {
                setIsAddFormVisibleForSprint(false);
                setBtnTextForSprint('Add new userstory');
            }
        }
    }
    const onCloseEditForm = () => {
        setIsEditVisible(false);
        setStoryToEdit('');
        fetchLists();
    }

    //close delete story confirm window
    const onCloseDeleteStory = () => {
        setIsDeleteVisible(false);
        setStoryToDelete('');
    }
    const onFormDeleteStory = (story) => {
        setStoryToDelete(story)
        setIsDeleteVisible(true);
    }


    //fetching all of the stories once when component is rendered
    useEffect(() => {
        getLists()
            .then(lists => console.log(lists));

        //sort the lists!!
        getList(backlogId)
            .then(list => {
                //console.log(list.title)
                setBacklogList(list.stories)
            })
            .catch((error) => {
                console.log(new Error(error))
            })
        getList(sprintlogId)
            .then(list => {
                //console.log(list.title)
                setSprintlogList(list.stories)
            })
            .catch((error) => {
                console.log(new Error(error))
            })
    }, []);

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd} onDragStart={() => console.log('onDragStart')}>
                {isEditVisible ? < EditUserstoryForm listName={currentList} onStoryDelete={onStoryDelete} onStoryUpdate={onStoryUpdate} storyToEdit={storyToEdit} onCloseEditForm={onCloseEditForm} onFormDeleteStory={onFormDeleteStory} /> : null}
                {isDeleteVisible ? <DeleteUserstory listName={currentList} storyToDelete={storyToDelete} onStoryDelete={onStoryDelete} onCloseDeleteStory={onCloseDeleteStory} onCloseEditForm={onCloseEditForm} isEditVisible={isEditVisible} /> : null}
                <div className="backlogview-container">
                    <div className='backloglist-wrapper productBacklog-light'>
                        <div className='backloglist__header-wrapper'>
                            <h1 className='backloglist__header'>Product Backlog</h1>
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='productBacklog' />
                            <ReactTooltip id='productBacklog' place='bottom' className='tooltip'>
                                <ProductBacklogInfo/>
                            </ReactTooltip>
                            <button className='add-userstory-btn' onClick={() => showUserstoryForm('backlog')} data-tip data-for='userstoryBtn'>{btnText}</button>
                            <ReactTooltip id='userstoryBtn' type='light' place='top'>
                                “As a [person], I [want to], [so that].”
                            </ReactTooltip>

                        </div>
                        {isAddFormVisible ? <AddUserstoryForm onStoryCreate={onStoryCreate} listId={backlogId} /> : null}
                        <BacklogList
                            userstoryList={backlogList}
                            title='Product Backlog'
                            getStoryForEdit={storyId => getStoryForEdit(storyId, 'product backlog')}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'product backlog')}
                            id={backlogId}
                        />
                    </div>
                    <div className='backloglist-wrapper sprintBacklog-light'>
                        <div className='backloglist__header-wrapper'>
                            <h1 className='backloglist__header'>Sprint Backlog</h1>
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='sprintBacklog' />
                            <ReactTooltip id='sprintBacklog' place='bottom' className='tooltip'>
                                <SprintBacklogInfo/>
                            </ReactTooltip>
                            <button className='add-userstory-btn' onClick={() => showUserstoryForm('sprint')} data-tip data-for='userstoryBtn'>{btnTextForSprint}</button>
                        </div>
                        {isAddFormVisibleForSprint ? <AddUserstoryForm onStoryCreate={onStoryCreate} listId={sprintlogId} /> : null}
                        <BacklogList
                            userstoryList={sprintlogList}
                            title='Sprint Backlog'
                            getStoryForEdit={storyId => getStoryForEdit(storyId, 'sprint backlog')}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'sprint backlog')}
                            id={sprintlogId}
                        />
                    </div>
                </div>
            </DragDropContext>
        </>
    );
}


export default BacklogView;
