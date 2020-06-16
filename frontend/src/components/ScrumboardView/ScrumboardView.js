import React, { useState, useEffect } from 'react';
import ScrumboardList from '../../components/ScrumboardView/ScrumboardList/ScrumboardList'
import EditUserstoryForm from '../EditUserstoryForm/EditUserstoryForm';
import AddUserstoryForm from '../AddUserstoryForm/AddUserstoryForm';
import DeleteUserstory from '../DeleteUserstory/DeleteUserstory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import '../ScrumboardView/ScrumboardView.css'
import { getList } from '../../api_services/scrumlist.service';
import { deleteStory, getStory, updateStory, createStory } from '../../api_services/userstory.service';
import { sprintlogId, donelogId, reviewlogId, progresslogId } from '../../api_services/config';
import { DragDropContext } from 'react-beautiful-dnd';



const sprintBacklogInfo = 'These are the tasks for the current sprint';
const inProgressInfo = 'these userstories are in progress';
const inReviewInfo = 'these userstories are completed and waiting for review';
const doneInfo = 'these userstories are completed and merged into the final product';

const ScrumboardView = () => {
    const [sprintlogList, setSprintlogList] = useState([]);
    const [inprogressList, setInProgressList] = useState([]);
    const [inreviewList, setInReviewList] = useState([]);
    const [indoneList, setDoneList] = useState([]);

    const [currentList, setCurrentList] = useState('');
    const [storyToEdit, setStoryToEdit] = useState('');
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [storyToDelete, setStoryToDelete] = useState('');

    const getListById = id => {
        switch (id) {
            case sprintlogId:
                return sprintlogList;
            case progresslogId:
                return inprogressList;
            case reviewlogId:
                return inreviewList;
            case donelogId:
                return indoneList;
            default:
                break;
        }
    }
    const setListById = (listId, newArray) => {
        switch (listId) {
            case sprintlogId:
                setSprintlogList(newArray);
                break;
            case progresslogId:
                setInProgressList(newArray);
                break;
            case reviewlogId:
                setInReviewList(newArray);
                break;
            case donelogId:
                setDoneList(newArray);
                break;
            default:
                break;
        }
    }

    //helper function for fetching stories from database and re-rendering the component
    const fetchLists = async () => {
        const _sprintlogList = await getList(sprintlogId);
        const _inprogressList = await getList(progresslogId);
        const _inreviewList = await getList(reviewlogId);
        const _indoneList = await getList(donelogId);
        //sort the lists!!
        setSprintlogList(_sprintlogList.stories);
        setInProgressList(_inprogressList.stories);
        setInReviewList(_inreviewList.stories);
        setDoneList(_indoneList.stories);
    }
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        console.log('result: ', result);
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
            newDraggedFromAndToList.splice(destination.index, 0, draggedStory);

            setListById(destination.droppableId, newDraggedFromAndToList);
        } else {
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
        fetchLists();
    }

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
    const showUserstoryForm = () => {
        if (!isAddFormVisible) {
            setIsAddFormVisible(true);
        }
        if (isAddFormVisible) {
            setIsAddFormVisible(false);
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
    //Fetch single list with ID
    useEffect(() => {
        getList(sprintlogId)
            .then(list => {
                //console.log(list.stories)
                setSprintlogList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(progresslogId)
            .then(list => {
                //console.log(list.stories)
                setInProgressList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(reviewlogId)
            .then(list => {
                //console.log(list.stories)
                setInReviewList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(donelogId)
            .then(list => {
                //console.log(list.stories)
                setDoneList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
    }, []);

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd} onDragStart={() => console.log('dsds')}>
                {isEditVisible ? < EditUserstoryForm listName={currentList} onStoryDelete={onStoryDelete} onStoryUpdate={onStoryUpdate} storyToEdit={storyToEdit} onCloseEditForm={onCloseEditForm} onFormDeleteStory={onFormDeleteStory} /> : null}
                {isDeleteVisible ? <DeleteUserstory listName={currentList} storyToDelete={storyToDelete} onStoryDelete={onStoryDelete} onCloseDeleteStory={onCloseDeleteStory} onCloseEditForm={onCloseEditForm} isEditVisible={isEditVisible} /> : null}
                <div className="scrumboard">
                    <div className="scrumboard-list currentSprint-light">
                        <div className="list-header">
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='sprintBacklog' />
                            <ReactTooltip id='sprintBacklog' place='bottom' effect='solid'>{sprintBacklogInfo}</ReactTooltip>
                            <h3>current sprint</h3>
                            {/* <button className='add-userstory-btn' onClick={showUserstoryForm} >{btnText}</button> */}
                            {!isAddFormVisible ? <FontAwesomeIcon icon={faPlus} size='lg' onClick={showUserstoryForm} /> : <FontAwesomeIcon icon={faMinus} size='lg' onClick={showUserstoryForm} />}
                        </div>
                        {isAddFormVisible ? <AddUserstoryForm onStoryCreate={onStoryCreate} listId={sprintlogId} /> : null}
                        <ScrumboardList
                            scrumBoard={sprintlogList}
                            title='Sprint backlog'
                            onStoryDelete={onStoryDelete}
                            getStoryForEdit={storyId => getStoryForEdit(storyId, "current sprint")}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'current sprint')}
                            id={sprintlogId}
                        />
                    </div>
                    <div className="scrumboard-list inProgress-light">
                        <div className="list-header">
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='inProgress' />
                            <ReactTooltip id='inProgress' place='bottom' effect='solid'>{inProgressInfo}</ReactTooltip>
                            <h3>in progress</h3>
                        </div>
                        <ScrumboardList
                            scrumBoard={inprogressList}
                            title='Progress'
                            onStoryDelete={onStoryDelete}
                            getStoryForEdit={storyId => getStoryForEdit(storyId, "in progress")}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'in progress')}
                            id={progresslogId}
                        />
                    </div>
                    <div className="scrumboard-list inReview-light">
                        <div className="list-header">
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='inReview' />
                            <ReactTooltip id='inReview' place='bottom' effect='solid'>{inReviewInfo}</ReactTooltip>
                            <h3>in review</h3>
                        </div>
                        <ScrumboardList
                            scrumBoard={inreviewList}
                            title='Review'
                            onStoryDelete={onStoryDelete}
                            getStoryForEdit={storyId => getStoryForEdit(storyId, "in review")}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'in review ')}
                            id={reviewlogId}
                        />
                    </div>
                    <div className="scrumboard-list done-light">
                        <div className="list-header">
                            <FontAwesomeIcon icon={faInfoCircle} className='info-icon' spin data-tip data-for='done' />
                            <ReactTooltip id='done' place='bottom' effect='solid'>{doneInfo}</ReactTooltip>
                            <h3>done</h3>
                        </div>
                        <ScrumboardList
                            scrumBoard={indoneList}
                            title='Done'
                            onStoryDelete={onStoryDelete}
                            getStoryForEdit={storyId => getStoryForEdit(storyId, "done")}
                            getStoryForDelete={storyId => getStoryForDelete(storyId, 'done')}
                            id={donelogId}
                        />
                    </div>
                </div>
            </DragDropContext>
        </>
    );
}

export default ScrumboardView;