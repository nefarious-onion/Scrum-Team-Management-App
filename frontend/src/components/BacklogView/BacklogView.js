import React, { useState, useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList';
import SprintList from './SprintList/SprintList';
import { getLists, getList } from '../../api_services/scrumlist.service';

const BacklogView = () => {
    const [backlogList, setBacklogList] = useState([]);
    const [sprintlogList, setSprintlogList] = useState([]);

    //fetching all of the stories from back-end
    useEffect(() => {
        getList()
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
