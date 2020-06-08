import React from 'react';

const AlertMessage = ({message, confirmAction}) => {
    return (
        <div>
            <h2>{message}</h2>

            <button onClick={confirmAction}>Yes</button>
            <button onClick={cancelAction}>Cancel</button>
        </div>
    );
}

export default AlertMessage;
