import React from 'react';
import * as Markdown from 'react-markdown';
const About = ({ title, content, id }) => {
  return (
    <>
      <div className="box-content" id={id}>
        <h2>{title}</h2>
        <Markdown source={content} />
      </div>
    </>
  );
};
export default About;
