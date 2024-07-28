import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Frequently Asked Questions</h2>
                <p className='text-center mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus neque consequuntur magni debitis et ullam quaerat pariatur repellat. Exercitationem cumque voluptatem autem possimus consequatur voluptas vero et. Ipsam, consectetur?
                </p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>First Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sunt quisquam illum? Adipisci iure architecto illo, tenetur saepe voluptas optio quod natus minus necessitatibus laboriosam unde sed, explicabo, ea sit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Second Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sunt quisquam illum? Adipisci iure architecto illo, tenetur saepe voluptas optio quod natus minus necessitatibus laboriosam unde sed, explicabo, ea sit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Third Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sunt quisquam illum? Adipisci iure architecto illo, tenetur saepe voluptas optio quod natus minus necessitatibus laboriosam unde sed, explicabo, ea sit.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FaqAccordion;