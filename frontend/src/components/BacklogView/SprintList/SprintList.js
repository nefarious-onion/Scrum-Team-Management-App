import React from 'react';
import Userstory from '../../Userstory/Userstory'
const SprintList = ({ backloglist }) => {

    const storyList = backloglist.map(story =>  
        
    )
    return (
        <div>
            <h1>SprintList</h1>
            <Userstory />
        </div >
    );
}

export default SprintList;
