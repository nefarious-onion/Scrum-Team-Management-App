import React from 'react';
import './Userstory.css'
const Userstory = ({ title, _id, desc }) => {
    //build userstory here
    return (
        <div>
            <p className="card">{title} </p>
        </div>
    );
}


export default Userstory;
