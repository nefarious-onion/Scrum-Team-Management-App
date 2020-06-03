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
            <div className="scrumboard-list">
                <h2>sprint</h2>
                <ScrumboardList scrumBoard={sprintlogList} title='Sprint backlog' />
            </div>
            <div className="scrumboard-list">
                <h2>in progress</h2>
                <ScrumboardList scrumBoard={sprintlogList} title='Progress' />
            </div>
            <div className="scrumboard-list">
                <h2>in review</h2>
                <ScrumboardList scrumBoard={sprintlogList} title='Review' />
            </div>
            <div className="scrumboard-list">
                <h2>done</h2>
                <ScrumboardList scrumBoard={sprintlogList} title='Done' />
            </div>
        </div>
    );
}

export default ScrumboardView;
