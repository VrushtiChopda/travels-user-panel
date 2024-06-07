import React from 'react'
import { Badge } from 'react-bootstrap';
import destination2 from '../../assets/destination2.jpg'
import destination5 from '../../assets/destination5.jpeg'
import destination6 from '../../assets/destination6.jpeg'
import Titles from '../title/Titles';
const TourPackages = () => {
    return (
        <>
            <div>
                <Titles
                    title='Top Pick'
                    diffColor='Best '
                    Subtitle='Tours packages'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?'
                />
                <div className='container '>
                    <div className="row ">
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages'>
                            <div className=" card ">
                                <div>
                                    <img src={destination6} className="card-img-top dest-img" alt="..." />
                                    <h4 className='tour-badge'><Badge bg='secondary' className='w-50' >9 day tours</Badge></h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages'>
                            <div className="card ">
                                <div>
                                    <img src={destination5} className="card-img-top dest-img" alt="..." />
                                    <h4 className='tour-badge'><Badge bg='secondary' className='w-50' >9 day tours</Badge></h4>

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages '>
                            <div className="card ">
                                <div className='h-'>
                                    <img src={destination2} className="card-img-top dest-img" alt="..." />
                                    <h4 className='tour-badge'><Badge bg='secondary' className='w-50'>9 day tours</Badge></h4>

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div >
        </>
    )
}

export default TourPackages
