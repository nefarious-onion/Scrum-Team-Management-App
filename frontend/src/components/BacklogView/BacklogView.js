import React, { useEffect } from 'react';
import BacklogList from './BacklogList/BacklogList'
import SpritList from './SprintList/SprintList'

const BacklogView = () => {

    return (
        <div>
            <BacklogList />
            <SpritList />
        </div>
    );
}

export default BacklogView;
