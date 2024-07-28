import React from 'react';
import './Admissions.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AdmissionsImg from '../../utils/image/images (1).jpeg';
import Admissions1Img from '../../utils/image/images (2).jpeg';
import Admissions2Img from '../../utils/image/images.jpeg';

const admissions = [
    {
        id: 1,
        img: [AdmissionsImg],
        title: 'Admissions 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam nisi neque, quibusdam qui illum laboriosam, quas quis sequi aliquam itaque, eius fuga enim sapiente amet maiores optio porro accusamus!'
    },
    {
        id: 2,
        img: [Admissions1Img],
        title: 'Admissions 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam nisi neque, quibusdam qui illum laboriosam, quas quis sequi aliquam itaque, eius fuga enim sapiente amet maiores optio porro accusamus!'
    },
    {
        id: 3,
        img: [Admissions2Img],
        title: 'Admissions 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam nisi neque, quibusdam qui illum laboriosam, quas quis sequi aliquam itaque, eius fuga enim sapiente amet maiores optio porro accusamus!'
    }
];

function Admissions() {
    return (
        <div className='admissions-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Admissions</h1>
                    <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam nisi neque, quibusdam qui illum laboriosam, quas quis sequi aliquam itaque, eius fuga enim sapiente amet maiores optio porro accusamus!</p>
                </div>
            </header>
            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <div className="row g04">
                        {admissions.map((admissions) => (
                            <div key={admissions.id} className='col-md-6 col-lg-4'>
                                <Link to="/admissions" className='text-decoration-none'>
                                  <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={admissions.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{admissions.title}</Card.Title>
                                        <Card.Text className='text-center'>{admissions.description}</Card.Text>
                                    </Card.Body>
                                  </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admissions;