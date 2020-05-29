import React from 'react';

const Userstory = ({ title, _id, desc }) => {
    //build userstory here
    return (
        <div>
            <p>{title}</p>
            <p>{_id}</p>
            <p>{desc}</p>
        </div>
    );
}


export default Userstory;
