import React from 'react';

import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <ul className='footer_container'>
                    <li className='footer_item first_link'>
                        <a className='footer_item' href="https://github.com/nefarious-onion" target="_blank">Anne's Github</a>
                    </li>
                    <li className='footer_item second_link'>
                        <a className='footer_item' href="https://github.com/bea94k" target="_blank">Bea's Github</a>
                    </li >
                    <li className='footer_item third_link'>
                        <a className='footer_item' href="https://github.com/jpaljakka" target="_blank">Jonne's Github</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
