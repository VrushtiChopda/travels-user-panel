import React, { useEffect, useState } from 'react'
import { getTourData } from '../services/Services'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaCirclePlay, FaLocationDot } from "react-icons/fa6";
import Titles from '../Component/title/Titles';
import sectionbg1 from '../assets/sectionbg1.png'
import Footer from './Footer';
import './Tours.css'
const Tours = () => {
    const [tours, setTours] = useState(null)
    useEffect(() => {
        const tourPackage = async () => {
            const data = await getTourData()
            console.log(data, '-----------Tour data-----------------')
            setTours(data)
            console.log(tours, 'uyhhjhjjkhkjhkjhjhkjj')
        }
        if (!tours) {
            tourPackage()
        }
    }, [tours])
    return (
        <>
            <div className='tourList'>
                <h1 className='text-center m-4'>Tour List</h1>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-3 mb-4">
                            <div>
                                <h3>Categories Types</h3>
                                <hr className='w-25 mb-4' />
                                <div>
                                    <input type="checkbox" name="historical" id="historical" className='me-2' />
                                    <label htmlFor='historical'>Historical Tours</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Beach" id="Beach" className='me-2' />
                                    <label htmlFor='Beach'>Beach Holidays</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Honeymoon" id="Honeymoon" className='me-2' />
                                    <label htmlFor='Honeymoon'>Honeymoon Tours</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Road" id="Road" className='me-2' />
                                    <label htmlFor='Road'>Road trips</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Tracking" id="Tracking" className='me-2' />
                                    <label htmlFor='Tracking'>Tracking tours</label>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h3>Duration Types</h3>
                                <hr className='w-25 mb-4' />
                                <div>
                                    <input type="checkbox" name="shortTime" id="shortTime" className='me-2' />
                                    <label htmlFor='shortTime'>3 to 6 days</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="LongTime" id="LongTime" className='me-2' />
                                    <label htmlFor='LongTime'>8 to 10 days</label>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12">
                            <Container>
                                <Row>
                                    {tours && tours.data.map((tour, index) => (
                                        <Col lg={12} md={6} sm={12} xs={12} key={index} className='mb-4'>
                                            <Row>

                                                <div className='col-lg-4 tourImageContainer'>
                                                    <img src={tour.imageUrl} className='tour-image' alt={tour.name} />
                                                </div>
                                                <div className=' col-lg-6 '>
                                                    <span >{tour.duration}</span>
                                                    <h3 className='mb-0'>{tour.name}</h3>
                                                    <span className='mt-0' ><FaLocationDot /> {tour.destination}</span>
                                                    <p className='mt-3'>{tour.longDescription}</p>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <h5 className='m-0'>{tour.price}</h5>
                                                    <p className='m-0'><span>per adult</span></p>
                                                    <Button className='btn btn-sm'>View Details</Button>
                                                </div>

                                            </Row>

                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <div className="image-container1">
                        <img src={sectionbg1} alt="Travel" />
                        <div className='title-overlay1'>
                            <Titles
                                title='Love where you are going'
                                diffColor='Explore your life, '
                                Subtitle='Travel where you'
                                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?'
                            />
                            <FaCirclePlay className='fs-1 mt-4 main-bold-color' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Tours
