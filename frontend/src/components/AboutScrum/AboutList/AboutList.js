import React from 'react';
import About from '../About/About'
import { useEntries } from '../../../custom_hooks/'



const AboutList = () => {
    const [entries, isLoading] = useEntries()
    const isValid = entries !== undefined && entries.length > 0;

    const aboutScrum = isValid
        ? entries.map(entry =>
            <About

                title={entry.fields.title}

            />)
        : <p> {isLoading} loading.. </p>;

    return (
        <>
            {aboutScrum}
        </>

    );
}

export default AboutList;
