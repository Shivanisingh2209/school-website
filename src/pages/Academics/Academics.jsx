import React from 'react';
import './Academics.css';
import { Card } from 'react-bootstrap';
import CurriculumImg from '../../utils/image/school.jpeg';
import PrimaryStudentImg from '../../utils/image/image2.jpeg';
import SecondaryStudentImg from '../../utils/image/images (2).jpeg';
import SeniorSecondaryStudentImg from '../../utils/image/image4.jpeg';
import StudentImg from '../../utils/image/images.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const academics = [
    {
        id: 1,
        img: [CurriculumImg],
        title: 'School',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque nobis. Libero unde voluptatum ipsam mollitia in voluptatibus vel inventore deleniti dolore. Laborum natus quo ea ipsam amet rem unde.'
    },
    {
        id: 2,
        img: [StudentImg],
        title: 'Student',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque nobis. Libero unde voluptatum ipsam mollitia in voluptatibus vel inventore deleniti dolore. Laborum natus quo ea ipsam amet rem unde.'
    },
    {
        id: 3,
        img: [PrimaryStudentImg],
        title: 'Primary Student',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque nobis. Libero unde voluptatum ipsam mollitia in voluptatibus vel inventore deleniti dolore. Laborum natus quo ea ipsam amet rem unde.'
    },
    {
        id: 4,
        img: [SecondaryStudentImg],
        title: 'Secondary Student',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque nobis. Libero unde voluptatum ipsam mollitia in voluptatibus vel inventore deleniti dolore. Laborum natus quo ea ipsam amet rem unde.'
    },
    {
        id: 5,
        img: [SeniorSecondaryStudentImg],
        title: 'Senior Secondary Student',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque nobis. Libero unde voluptatum ipsam mollitia in voluptatibus vel inventore deleniti dolore. Laborum natus quo ea ipsam amet rem unde.'
    },
];

function Academics() {
    return (
        <div className='academics-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Academics</h1>
                    <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eaque non vel cupiditate veritatis ullam perspiciatis? Sint quae cumque quidem quas facere sequi, pariatur, provident corporis, voluptate corrupti incidunt harum.</p>
                </div>
            </header>
            <div className='container py-5'>
                <div className='row g-4'>
                    {academics.map((academics) => (
                        <div key={academics.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={academics.img} />
                                    <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                        <Card.Title className='fs-1 text-danger'>{academics.title}</Card.Title>
                                        <Card.Text className='text-center'>{academics.description}</Card.Text>
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

export default Academics;