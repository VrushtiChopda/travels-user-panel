import React, { useEffect } from 'react'
import { Carousel } from "mdb-ui-kit";
import 'mdb-ui-kit/css/mdb.min.css';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FiFlag } from "react-icons/fi";
import { GrLocationPin } from "react-icons/gr";
import { SlDirections } from "react-icons/sl";
import { ImCompass2, ImOpera } from "react-icons/im";
import destination from '../assets/destination.jpeg'
import destination1 from '../assets/destination1.jpeg'
import destination2 from '../assets/destination2.jpg'
import destination3 from '../assets/destination3.jpeg'
import destination4 from '../assets/destination4.jpeg'
import destination5 from '../assets/destination5.jpeg'
import destination6 from '../assets/destination6.jpeg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import Footer from './Footer';
const Home = () => {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselBasicExample');
        new Carousel(carouselElement, {
            ride: 'carousel',
        });
    }, []);
    return (
        <>
            {/* -----------------carousel---------------- */}
            <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={require('../assets/carousel-1.jpg')} className="d-block w-100" alt="Sunset Over the City" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={require('../assets/carousel-2.jpg')} className="d-block w-100" alt="Canyon at Nigh" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={require('../assets/carousel-3.jpg')} className="d-block w-100" alt="Cliff Above a Stormy Sea" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                    <span aria-hidden="true" className='fs-1'><GrPrevious /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                    <span aria-hidden="true" className='fs-1'><GrNext /></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* -------------------Core Features------------------------ */}
            <div>
                <div className='text-center mt-5'>
                    <h2 style={{ color: 'rgb(235, 190, 113)' }}>Core Features</h2>
                    <h1 className='main-color'><span style={{ color: 'black' }}>Find</span> Travel Perfection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?</p>
                </div>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class=" col-lg-3 col-md-6 col-sm-12 justify-content-center">
                            <div className="card border border-1 m-2">
                                <div class="card-body">
                                    <h1 class=" f-icons"><FiFlag /></h1>
                                    <h3 className="card-subtitle mb-2 text-body-secondary">Tell us what you want to do</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="f-links">100+ reviews</a>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-12 justify-content-center">
                            <div className="card border border-1 m-2">
                                <div class="card-body">
                                    <h1 class=" f-icons"><GrLocationPin /></h1>
                                    <h3 className="card-subtitle mb-2 text-body-secondary">Share your travel location</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="f-links">100+ reviews</a>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-12 justify-content-center">
                            <div className="card border border-1 m-2">
                                <div class="card-body">
                                    <h1 class=" f-icons"><SlDirections /></h1>
                                    <h3 className="card-subtitle mb-2 text-body-secondary">Share your travel preference</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="f-links">100+ reviews</a>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-12 justify-content-center">
                            <div className="card border border-1 m-2">
                                <div class="card-body">
                                    <h1 class=" f-icons"><ImCompass2 /></h1>
                                    <h3 className="card-subtitle mb-2 text-body-secondary">100% trusted tour Agency</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="f-links">100+ reviews</a>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >

                {/* <div className='container'>
                    <div className='row d-flex '>
                        <div className="card col-sm-12 col-md-6 col-lg-3 " >

                            <div className="card-body">
                                <h5 className="f-icons"><FiFlag /></h5>
                                <h3 className="card-subtitle mb-2 text-body-secondary">Tell us what you want to do</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="f-links">100+ reviews</a>
                            </div>

                        </div>
                        <div className="card col-sm-12 col-md-6 col-lg-3 " >

                            <div className="card-body">
                                <h5 className="f-icons"><GrLocationPin /></h5>
                                <h3 className="card-subtitle mb-2 text-body-secondary">Share your travel location</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="f-links">100+ reviews</a>
                            </div>

                        </div>
                        <div className="card col-sm-12 col-md-6 col-lg-3 " >
                            <div className="card-body">
                                <h5 className="f-icons"><SlDirections /></h5>
                                <h3 className="card-subtitle mb-2 text-body-secondary">Share your travel preference</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="f-links">100+ reviews</a>
                            </div>
                        </div>
                        <div className="card col-sm-12 col-md-6 col-lg-3 " >
                            <div className="card-body">
                                <h5 className="f-icons"><ImCompass2 /></h5>
                                <h3 className="card-subtitle mb-2 text-body-secondary">100% trusted tour Agency</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="f-links">100+ reviews</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
            {/* ---------------------Top destinations-------------------------- */}\
            <div className='mb-3'>
                <div className='text-center mt-5'>
                    <h2 style={{ color: 'rgb(235, 190, 113)' }}>Top Destinations</h2>
                    <h1 className='main-color'><span style={{ color: 'black' }}>Explore </span>Top Destinations</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?</p>
                </div>
                <div className='container '>
                    <div className="row">
                        <div className='col-lg-4 col-sm-12 mb-3 ' >
                            <img src={destination} className='w-100 h-100' alt='zxcsdfvdfbfgbnfgn' style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-lg-8 col-sm-12' >
                            <div className='mb-3'>
                                <img src={destination1} alt='xcsdcsvdfgdh' style={{ maxWidth: '100%', minWidth: '200px', borderRadius: '10px' }} />
                            </div>
                            <div className='col-lg-12 col-sm-12 d-flex destination-img' >
                                <div className='w-100 h-100 me-3 mb-3' >
                                    <img src={destination3} alt='asxsacxsdacsadc' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                                </div>
                                <div className='w-100 mb-3' >
                                    <img src={destination4} alt='sdcsdvs' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------Tour packages---------------------- */}
            <div>
                <div className='text-center mt-5'>
                    <h2 style={{ color: 'rgb(235, 190, 113)' }}>Top Pick</h2>
                    <h1 className='main-color'><span style={{ color: 'black' }}>Best </span>Tours packages</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?</p>
                </div>
                <div className='container '>
                    <div className="row ">
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages'>
                            <div class=" card " style={{ width: "18rem" }}>
                                <div>
                                    <img src={destination6} class="card-img-top dest-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages'>
                            <div class="card " style={{ width: "18rem" }}>
                                <div>
                                    <img src={destination5} class="card-img-top dest-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 packages '>
                            <div class="card " style={{ width: "18rem" }}>
                                <div className='h-'>
                                    <img src={destination2} class="card-img-top dest-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h2>place</h2>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4>Go somewhere</h4>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div >

            {/* ---------------------- Tour Guides-------------------- */}
            <div>
                <div className='text-center mt-5'>
                    <h2 style={{ color: 'rgb(235, 190, 113)' }}>Tour Guides</h2>
                    <h1 className='main-color'><span style={{ color: 'black' }}>Meet Our </span>Excellent Guides</h1>
                    <p>"Exceptional Guides for Unforgotable journey"</p>
                </div>
                <div className="container">
                    <div className="row d-flex">
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" >
                                <img class="card-img-top" src={img1} alt="Card image cap" />
                                <div class="text-center card-body p-0" style={{ background: "rgb(159, 224, 203)" }}>
                                    <h3>Guide Name</h3>
                                    <p>Senior agent</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" >
                                <img class="card-img-top" src={img2} alt="Card image cap" />
                                <div class="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>head officer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" >
                                <img class="card-img-top" src={img3} alt="Card image cap" />
                                <div class="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>supervisor</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" >
                                <img class="card-img-top" src={img4} alt="Card image cap" />
                                <div class="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>Quality Assuarance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Home
