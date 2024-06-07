import React, { useEffect } from 'react'
import { Carousel } from "mdb-ui-kit";

import { GrNext, GrPrevious } from 'react-icons/gr';
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
const Slider = () => {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselBasicExample');
        new Carousel(carouselElement, {
            ride: 'carousel',
        });
    }, []);
    return (
        <>
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
                        <img src={carousel1} className="d-block w-100" alt="Sunset Over the City" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="Canyon at Nigh" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="Cliff Above a Stormy Sea" />
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
        </>
    )
}

export default Slider
