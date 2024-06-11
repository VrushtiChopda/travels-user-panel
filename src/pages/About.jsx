import React from 'react'
import travel from '../assets/travel.png'
import './About.css'
import destination6 from '../assets/destination6.jpeg'
import Footer from './Footer'
import { SlLocationPin } from "react-icons/sl";
import { MdCardTravel } from 'react-icons/md'
import { FaMoneyCheckDollar } from 'react-icons/fa6'
const About = () => {
    return (
        <>
        <div className='about-page'></div>
            <h1 className='text-center p-5'>About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-12 mt-5">
                        <h3 className='main-color'>Get Know About Us</h3>
                        <h2>Explore All Tour of World With Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil numquam quos perferendis eaque, error harum hic quibusdam placeat nemo dolores asperiores est a perspiciatis repellendus rem, magnam nesciunt ipsum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias soluta iste atque adipisci asperiores quo necessitatibus, eum quod eveniet iure praesentium, debitis amet non unde, pariatur voluptate quibusdam quae neque dolore odio culpa sapiente!</p>
                        <div className='d-flex justify-content-between'>
                            <span>Tour Guide</span>
                            <span>Friendly Price</span>
                            <span>Reliable Tour Package</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12 aboutUsImg">
                        <img src={travel} alt="About us image" />
                    </div>
                </div>
            </div>
            <div className="container p-5 aboutUs">
                <div className="row">
                    <div className="col-lg-6 col-md-7 col-sm-12 aboutImg">
                        <img src={destination6} alt="About us image" className='h-sm-100' />
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12 ">
                        <h3 className='main-color'>Perfect Team </h3>
                        <h2>Our Experience Guides</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil numquam quos perferendis eaque, error harum hic quibusdam placeat nemo dolores asperiores est a perspiciatis repellendus rem, magnam nesciunt ipsum.</p>
                        <div>
                            <div className='d-flex'>
                                <SlLocationPin className='me-1 fs-4 main-color ' />
                                <h5>Expert team Guide</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos, quod velit atque excepturi laudantium!</p>
                        </div>
                        <div>
                            <div className='d-flex'>
                                <MdCardTravel className='me-1 fs-4 main-color ' />
                                <h5>Correct Directions</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos, quod velit atque excepturi laudantium!</p>
                        </div>
                        <div>
                            <div className='d-flex'>
                                <FaMoneyCheckDollar className='me-1 fs-4 main-color ' />
                                <h5>Save Money and Time</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos, quod velit atque excepturi laudantium!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About