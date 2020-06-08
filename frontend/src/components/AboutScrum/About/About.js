import React from 'react';
import '../../AboutScrum/About/About.css'
import * as Markdown from 'react-markdown'
const About = (props) => {
    return (
        <>
            <div className="box-content">
                <h1>{props.title}</h1>
                <Markdown source={props.content} />

            </div>

        </>
    )
}
export default About;
