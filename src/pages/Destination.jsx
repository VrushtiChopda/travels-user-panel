import React, { useEffect, useState } from 'react'
import Titles from '../Component/title/Titles'
import { getDestinationData } from '../services/Services';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Destination.css'
import sectionbg1 from '../assets/sectionbg1.png'
import { FaCirclePlay } from 'react-icons/fa6';
import Footer from '../pages/Footer'
const Destination = () => {
    const [destinations, setDestination] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDestinationData();
            setDestination(data);
        }
        if (!destinations) {
            fetchData();
        }
    }, [destinations])
    return (
        <>
            <Titles
                title='Top destinations'
                diffColor='Explore '
                Subtitle=' Top destinations'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?'
            />
            <Container>
                <Row className='d-flex justify-content-start'>
                    {destinations && destinations.data.map((dest, index) => (
                        <Col lg={4} md={4} sm={6} xs={12} key={index} className='mb-4 '>
                            <div className='text-center destination-container'>
                                <div className='image-container'>
                                    <img src={dest.imageUrl} alt={dest.place} className='image' />
                                </div>
                                <h5 className='top-left mt-5'>{dest.place}</h5>
                                <h2 className='top-left mb-5'>{dest.state}</h2>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
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
        </>
    )
}

export default Destination
