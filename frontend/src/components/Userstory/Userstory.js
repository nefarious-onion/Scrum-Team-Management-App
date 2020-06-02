import React from 'react';
import './Userstory.css';

const Userstory = ({ title, _id, desc }) => {
    //build userstory here
    return (
        <div className='userstory-container'>
            <p className='userstory-title'>{title}</p>
            {/* <p>{_id}</p>
            <p>{desc}</p> */}
        </div>
    );
}


export default Userstory;
