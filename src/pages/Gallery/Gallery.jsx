import React from 'react';
import './Gallery.css';
import { Card } from 'react-bootstrap';
import Library1Img from '../../utils/image/library.jpeg';
import Library2Img from '../../utils/image/library2.jpeg';
import Canteen1Img from '../../utils/image/canteen.jpeg';
import Canteen2Img from '../../utils/image/canteen1.jpeg';
import Canteen3Img from '../../utils/image/canteen2.jpeg';
import ClassImg from '../../utils/image/class.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const gallery = [
    {
        id: 1,
        img: [Library1Img],
        title: 'Library'
    },
    {
        id: 2,
        img: [Library2Img],
        title: 'Library'
    },
    {
        id: 3,
        img: [Canteen1Img],
        title: 'Canteen'
    },
    {
        id: 4,
        img: [Canteen2Img],
        title: 'Canteen'
    },
    {
        id: 5,
        img: [Canteen3Img],
        title: 'Canteen'
    },
    {
        id: 6,
        img: [ClassImg],
        title: 'Class'
    },
];

function Gallery() {
    return (
        <div className='admissions-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flx-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Gallery</h1>
                </div>
            </header>
            <div className='container py-5'>
                <div className='row g-4'>
                    {gallery.map((gallery) => (
                        <div key={gallery.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={gallery.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{gallery.title}</Card.Title>
                                    <Card.Text className='text-center'>{gallery.description}</Card.Text>
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

export default Gallery;