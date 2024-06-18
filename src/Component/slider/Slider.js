import React, { useEffect, useState } from 'react'
import { Carousel } from "mdb-ui-kit";

import { GrNext, GrPrevious } from 'react-icons/gr';
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import { sliderDetails } from '../../services/Services';
const Slider = () => {
    const [slider, setSlider] = useState([])

    useEffect(() => {
        const sliderData = async (data) => {
            const Details = await sliderDetails(data)
            console.log(Details, "----------- slider details ------------------")
            setSlider(Details.data)
        }
        sliderData()
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
                    {
                        slider && slider.map((data) => (
                            <div className="carousel-item active">
                                <img src={data.imageUrl} className="d-block w-100" alt="Sunset Over the City" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{data.title}</h5>
                                    <h3>{data.heading}</h3>
                                    <p>{data.blog}</p>
                                </div>
                            </div>
                        ))
                    }
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
