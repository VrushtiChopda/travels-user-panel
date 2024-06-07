import React from 'react'
import { Card } from 'react-bootstrap'
import { FiFlag } from "react-icons/fi";
import { GrLocationPin } from "react-icons/gr";
import { SlDirections } from "react-icons/sl";
import { ImCompass2 } from "react-icons/im";
import { Container, Row, Col } from 'react-bootstrap';
import Titles from '../title/Titles';
const CoreFeatures = () => {
    const Features = [
        {
            icon: <FiFlag />,
            title: 'Tell us what you want to do',
            desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '100+ reviews'
        },
        {
            icon: <GrLocationPin />,
            title: 'Share your travel location',
            desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '100+ reviews'
        },
        {
            icon: <SlDirections />,
            title: 'Share your travel preference',
            desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '100+ reviews'
        },
        {
            icon: <ImCompass2 />,
            title: '100% trusted tour Agency',
            desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '100+ reviews'
        }
    ]
    return (
        <>
            <div>
                <Titles
                    title='Core Features'
                    diffColor='Find '
                    Subtitle='Travel Perfection'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?'
                />
                <Container>
                    <Row className='p-0 m-0'>
                        {Features && Features.map((coreFeature, index) => (
                            <Col lg={3} md={6} key={index} className='features' >
                                <Card className=''>
                                    <Card.Body className='border border-1'>
                                        <Card.Title className="f-icons">{coreFeature.icon}</Card.Title>
                                        <Card.Subtitle className="card-subtitle">{coreFeature.title}</Card.Subtitle>
                                        <Card.Text className="card-text">
                                            {coreFeature.desc}
                                        </Card.Text>
                                        <Card.Link href="#" className="f-links">{coreFeature.link}</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default CoreFeatures
