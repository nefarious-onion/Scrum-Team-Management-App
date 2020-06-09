import React from 'react';
import '../../AboutScrum/About/About.css'
import * as Markdown from 'react-markdown'
const About = ({ title, content, id }) => {
    return (
        <>
            <div className="box-content" id={id}>
                <h1>{title}</h1>
                <Markdown source={content} />
            </div>

        </>
    )
}
export default About;