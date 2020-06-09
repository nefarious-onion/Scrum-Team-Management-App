import React, { useState, useEffect } from 'react';
import ScrumboardList from '../../components/ScrumboardView/ScrumboardList/ScrumboardList'
import '../ScrumboardView/ScrumboardView.css'
import { getList } from '../../api_services/scrumlist.service';

import { sprintlogId, donelogId, reviewlogId, progresslogId } from '../../api_services/config';


const ScrumboardView = () => {
    const [sprintlogList, setSprintlogList] = useState([]);
    const [inprogressList, setInProgressList] = useState([]);
    const [inreviewList, setInReviewList] = useState([]);
    const [indoneList, setDoneList] = useState([]);


    //Fetch single list with ID
    useEffect(() => {
        getList(sprintlogId)
            .then(list => {
                console.log(list.stories)
                setSprintlogList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(progresslogId)
            .then(list => {
                console.log(list.stories)
                setInProgressList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(reviewlogId)
            .then(list => {
                console.log(list.stories)
                setInReviewList(list.stories)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
        getList(donelogId)
            .then(list => {
                console.log(list.stories)
                setDoneList(list.stories)
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
                <ScrumboardList scrumBoard={inprogressList} title='Progress' />
            </div>
            <div className="scrumboard-list">
                <h2>in review</h2>
                <ScrumboardList scrumBoard={inreviewList} title='Review' />
            </div>
            <div className="scrumboard-list">
                <h2>done</h2>
                <ScrumboardList scrumBoard={indoneList} title='Done' />
            </div>
        </div>
    );
}

export default ScrumboardView;