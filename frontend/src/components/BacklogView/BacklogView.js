import React, { useState } from 'react';
import BacklogList from './BacklogList/BacklogList'
import SprintList from './SprintList/SprintList'
import backlogdata from '../backlogdata'
const BacklogView = () => {


    const [backlogList, setBacklogList] = useState(backlogdata);

    return (


        <div>
            <BacklogList backloglist={backlogList} />
            <SprintList backlogList={} />
        </div>
    );
}

export default BacklogView;
