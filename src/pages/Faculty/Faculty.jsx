import React from 'react';
import './Faculty.css';
import { Card } from 'react-bootstrap';
import Faculities1Img from '../../utils/image/faculities1.jpeg';
import Faculities2Img from '../../utils/image/faculities2.jpeg';
import Faculities3Img from '../../utils/image/faculities3.jpeg';
import FaculitiesImg from '../../utils/image/faculities.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const faculities = [
    {
        id: 1,
        img: [Faculities1Img],
        title: 'Chairman'
    },
    {
        id: 2,
        img: [Faculities2Img],
        title: 'Director'
    },
    {
        id: 3,
        img: [Faculities3Img],
        title: 'Principal'
    },
    {
        id: 4,
        img: [FaculitiesImg],
        title: 'Teachers'
    }
];

function Faculty() {
    return (
        <div className='faculty-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Faculty</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate impedit, praesentium assumenda repellendus ullam est nam optio, quaerat, molestias eaque neque tempore sunt laudantium modi voluptas eius quas quo?</p>
                </div>
            </header>
            <div className='container py-5'>
                <div className='row g-4'>
                    {faculities.map((faculities) => (
                        <div key={faculities.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={faculities.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{faculities.title}</Card.Title>
                                    <Card.Text className='text-center'>{faculities.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-dark text-light py-5'>
                <FaqAccordion />     
            </div>

        </div>
    )
}

export default Faculty;