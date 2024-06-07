import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <div className='main-footer pt-5 p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 '>
                            <h3 className='main-color'>TRAVELS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet culpa voluptatem reprehenderit omnis repudiandae soluta sapiente dolorem natus!</p>
                            <ul>
                                <li><span>PO BOX : </span>+47-334-437-2133</li>
                                <li><span>Location : </span>Collins streets, sydney , Australia</li>
                                <li><span>Email : </span>info@Travels.in</li>
                                <li><span>Web site : </span>www.travels.com</li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                            <h3>Quick links</h3>
                            <hr className='w-25 mt-0' />
                            <ul className='footer-links'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Destination</a></li>
                                <li><a href="">Tours</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href=''>Register</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <h3>Newsletters</h3>
                            <hr className='w-25 mt-0' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni!</p>
                            <div className='d-flex flex-column flex-md-row footer-input'>
                                <Form.Control type='text' className='w-100 w-md-50 me-0 me-md-2 mb-2 mb-md-0'></Form.Control>
                                <button className='btn w-md-auto' style={{ background: 'rgb(159, 224, 203)' }}>Subscribe</button>
                            </div>
                            {/* <div className='d-flex flex-sm-column footer-input'>
                                <Form.Control type='text' className='w-50 me-2'></Form.Control>
                                <button className='btn' style={{ background: 'rgb(159, 224, 203)' }}>Subscribe</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='container footer-container'>
                    <div className="row ">
                        <div className="col">
                            2024 Travels, All india reserved
                        </div>
                        <div className='col fs-5 d-flex justify-content-end'>
                            <FaInstagram />
                            <FaFacebookSquare />
                            <FaSquareTwitter />
                            <AiOutlineLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
