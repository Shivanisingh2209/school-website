import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/Choose Section/ChooseSection';
import StartCourseImg from '../../utils/image/logoschl.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <h1 className='text-center fw-semibold'>Springdale Public School</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/about">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>About</button>
                        </Link>
                        <Link to="/contactus">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="py-5">
            <ChooseSection />
            </div>
            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>
                                2024 start courses
                            </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a esse quas totam est quasi deserunt sapiente vel libero obcaecati commodi, maxime fugiat ad. Eaque odio sed sint deserunt corporis.</p>
                            <Link to="/academics">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCourseImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <FaqAccordion />
            </div>
        </div>

    )
}

export default Home;