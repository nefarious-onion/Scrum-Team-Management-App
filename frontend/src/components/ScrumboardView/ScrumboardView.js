import React, { useState, useEffect } from 'react';
import ScrumboardList from '../../components/ScrumboardView/ScrumboardList/ScrumboardList'
import '../ScrumboardView/ScrumboardView.css'
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
        <div className="scrumboard">
            <div>

                <h1>Sprint</h1>
                <ScrumboardList scrumBoard={sprintlogList} title='Sprint backlog' />
            </div>
            <div>

                <h1>in progress</h1>
                <ScrumboardList scrumBoard={sprintlogList} />
            </div>
            <div>

                <h1>in progress</h1>
                <ScrumboardList scrumBoard={sprintlogList} />
            </div>
            <div>

                <h1>in progress</h1>
                <ScrumboardList scrumBoard={sprintlogList} />
            </div>

        </div>
    );
}

export default ScrumboardView;
