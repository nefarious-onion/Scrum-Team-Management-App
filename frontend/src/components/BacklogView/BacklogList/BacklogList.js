import React, { useEffect, useRef } from 'react';
import Userstory from '../../Userstory/Userstory';
import './BacklogList.css';
import Dragula from 'react-dragula';
const BacklogList = ({ userstoryList, title, onStoryDelete, onStoryUpdate, getStoryForEdit }) => {

    const dragula = useRef();

    const dragulaArray = [];

    useEffect(() => {
        dragulaDecorator(dragula.current)
        //let options = {};
        //Dragula([dragulaArray], options);
    });
    /*
        const dragulaDecorator = (componentBackingInstance) => {
            if (componentBackingInstance) {
                dragulaArray.push(dragula)
                console.log(dragula.current)
            }
        };
    */
    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };

    //checks that the list is not empty or undefined
    const isValid = userstoryList !== undefined && userstoryList.length > 0;
    const storyList = isValid
        ? userstoryList.map(story =>
            <Userstory
                key={story._id}
                title={story.title}
                id={story._id}
                desc={story.descr}
                onStoryDelete={onStoryDelete}
                onStoryUpdate={onStoryUpdate}
                getStoryForEdit={getStoryForEdit}
            />)
        : <p>{title} is empty</p>;

    return (
        <div className='backloglist-container dragulaContainer' ref={dragula}>
            {storyList}
        </div>
    )
}

export default BacklogList;
