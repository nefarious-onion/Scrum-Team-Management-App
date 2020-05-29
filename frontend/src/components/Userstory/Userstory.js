import React from 'react';
import BacklogList from '../../components/BacklogView/BacklogList/BacklogList'

const Userstory = ({ title, id }) => {

    return (
        <div>
            <p>{title}</p>
            <p>{id}</p>
        </div>
    );
}


export default Userstory;
