import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/image/images.jpeg';
import ChooseSection from '../../components/Choose Section/ChooseSection';
import Person1 from '../../utils/image/Person1.jpeg';
import Person2 from '../../utils/image/Person2.jpeg';
import Person3 from '../../utils/image/Person3.jpeg';


const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
]

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex fex column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About</h1>
                    <p className='text-center w-75 mb-5'>Springdale Public School is a creative temple of learning. Infrastructure wise, the school is best equipped having the highest number of computers in its lab. The music faculty has its own sound proof practice areas. The sports practice are regularly done in sound environment on vast stretched playground by well versed professional coaches and school contains rich library. </p>
                </div>
            </header>
            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Aim of the school</h2>
                        <p className='mb-4 mb-lg-5'>The main aim of the school is to provide comprehensive educational manner ofspeaking system to impart impulse to the student's physical growth as well as his/her scientific thinking, cemotional, spiritual and moral development. Having grown up in a swift changing competitive world, school purposed to impart the best education in district which might prove panacea for students. The school has lit a flame of modern, traditional and technological education amongst its students. </p>
                        <p className='mb-4 mb-lg-5'>It has its own following countenance.</p>
                           1. Spacious Class Rooms with standardized infrastructure.<br></br>
                           2. The number of students in each class is limited so that the teacher can give individual attention to each student.<br></br>
                           3. Paying much attention to all subjects, classes will be allotted to expert teachers in particular subjects.<br></br>
                           4. Large, well stocked libraries, with latest encyclopaedia, reference books, classical literature and other books of special to the children age group, covering wide range in Science, Art, History, Geography and culture, both in English and Hindi.<br></br>
                           5. Encouraging the habit of reading amongst the students, books and magazines are brought on weekly basis.<br></br>
                           6. The well-faciliated science lab is filled with the latest and upto date equipments.<br></br>
                           7. Computer lab facilitates in enhancing computing skills.<br></br>
                           8. Sports is given due importance and school gives coaching facilities to all its students in Table tennis, tennis, basketball, Volley-ball and cricket, foot-ball etc.<br></br>
                           9. Scouts and Guides and N.C.C.<br></br>
                           10. General Awareness, communication skills, discipline, conduct are main motive of the school activities.<br></br>
                          <Link to="/contactus">
                          <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                          </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div>
            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <h2 className='text-center mb-5'>Our Winners</h2>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-4'>
                                <img src={person.img} className='img-fluid' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;