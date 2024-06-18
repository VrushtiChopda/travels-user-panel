import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Titles from '../Component/title/Titles';
import { FaCirclePlay } from 'react-icons/fa6';
import sectionbg1 from '../assets/sectionbg1.png'
import Footer from './Footer';
import './Tours.css'
import { FaRegCalendarAlt } from "react-icons/fa";

const TourDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { tour } = location.state;
    const [numberOfPeople, setNumberOfPeople] = useState(1)

    const id = tour._id
    const price = tour.price
    const totalPrice = tour.price * numberOfPeople
    const token = localStorage.getItem("token")
    const instantBooking = () => {
        if (token) {
            navigate('/bookings', {
                state: {
                    packId: id,
                    numberOfPeople: numberOfPeople,
                    price: price,
                    totalPrice: totalPrice
                }
            })
        } else {
            navigate('/login')
        }
    }
    return (
        <>
            <div className='pt-5'>
                <h1 className='text-center'>Tour Schedule</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{tour.name}</h1>
                            <img src={tour.imageUrl} className='rounded w-75 ' ></img>
                            {/* <div className=''>
                                <p>Day : {tour.day}</p>
                                <p>MaxPeople : {tour.maxPeople}</p>
                                <p>MinAge : {tour.minAge}</p>
                            </div> */}
                            <h3>Description</h3>
                            <p>{tour.longDescription}</p>
                        </div>
                        <div className="col-lg-4 ">
                            <div class="card mt-5 details-card" >
                                <div class="card-body">
                                    <h3 class="card-title text-center">MAKE A BOOKING</h3>
                                    <hr className='my-4' />
                                    <p class="card-text">Trip Start Date :</p>
                                    <h5><FaRegCalendarAlt /> {tour.date}</h5>
                                    <h4>{tour.day}</h4>
                                    <p>Number of person</p>
                                    <select
                                        className="form-select mb-2"
                                        value={numberOfPeople}
                                        onChange={(e) => setNumberOfPeople(e.target.value)}
                                    >
                                        <option selected disabled>
                                            Select Person
                                        </option>
                                        {[...Array(6).keys()].map((i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='p-3 mt-3 bg-white rounded-2'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Per Person</p>
                                            <p>{price}</p>
                                        </div>
                                        <div className='mb-3 d-flex justify-content-between'>
                                            <p>Other Fees</p>
                                            <p>Free</p>
                                        </div>
                                        <hr className='m-1' />
                                        <div className='d-flex justify-content-between fw-bold'>
                                            <p>Total</p>
                                            <p>{totalPrice}</p>
                                        </div>
                                        <hr className='m-1' />
                                        <div><span>Note : </span>Click Instant book and add passanger details</div>
                                    </div>
                                    <button className='btn w-100 mt-3' style={{ background: 'rgb(159, 224, 203)' }} onClick={instantBooking}>Instant Booking</button>
                                </div>
                            </div>
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

export default TourDetails
