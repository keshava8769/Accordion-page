import React from 'react';
import {Accordion} from 'react-bootstrap'; 
import './Accordion.css';
import './App.css';



function BsAccordion() {
    return (
        <Accordion defaultActiveKey="0" className='mt-5 p-3'>
            <Accordion.Item eventKey='1' className='item'>
                <Accordion.Header> What is Accordion</Accordion.Header>
                <Accordion.Body>
                    An accordion is a UI component that allows users to toggle the visibility of content sections. It's commonly used for FAQs, menus, and collapsible panels. Each section has a header (title) that, when clicked, expands or collapses the corresponding content.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2' className='item'>
                <Accordion.Header> What is React</Accordion.Header>
                <Accordion.Body>
                    React is a JavaScript library for building user interfaces (UIs), primarily for web applications. It was developed by Facebook (now Meta) and is widely used for creating dynamic, interactive, and reusable UI components.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3' className='item'>
                <Accordion.Header> What is use of the accordion in react </Accordion.Header>
                <Accordion.Body>
                    In React, an accordion is a UI component that organizes content into expandable and collapsible sections. It helps improve user experience by displaying information progressively, saving space, and keeping the interface clean. Users can click on a section header to reveal or hide its content.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4' className='item'>
                <Accordion.Header> What is bootstrap and uses? </Accordion.Header>
                <Accordion.Body>
                    Bootstrap is a popular open-source CSS framework for building responsive and mobile-first websites quickly. It provides pre-designed components like grids, buttons, and modals, along with utility classes for styling. Developers use Bootstrap to streamline UI design and ensure consistency across different devices and browsers.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
export default BsAccordion;