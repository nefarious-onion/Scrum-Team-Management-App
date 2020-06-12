import React from 'react';
import About from '../About/About'
const AboutList = ({ aboutList }) => {

    //checks that the list is not empty or undefined
    const isValid = aboutList !== undefined && aboutList.length > 0;
    const aboutScrum = isValid
        ? aboutList.map(post =>
            <About
                title={post.fields.title}
                content={post.fields.content}
                key={post.sys.id}
                id={post.fields.identifier}
            />)
        : <p>Loading content from Contentful..</p>;
    return (
        <div>
            {aboutScrum}
        </div>
    );
}

export default AboutList;