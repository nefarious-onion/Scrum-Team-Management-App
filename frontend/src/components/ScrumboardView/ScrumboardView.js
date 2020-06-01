import React, { useState, useEffect } from 'react';
import Done from '../ScrumboardView/Done/Done';
import InProgress from '../ScrumboardView/InProgress/InProgress'
import InReview from '../ScrumboardView/InReview/InReview'
import SprintBacklog from '../ScrumboardView/SprintBacklog/SprintBacklog'
import { getStories, getStory } from '../../services/api.service';

const ScrumboardView = () => {
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
            <SprintBacklog sprintlog={sprintlogList} />
            <InProgress />
            <InReview inreview={sprintlogList} />
            <Done doneList={sprintlogList} />
        </div>
    );
}

export default ScrumboardView;
