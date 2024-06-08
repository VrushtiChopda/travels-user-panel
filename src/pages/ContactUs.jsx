import React from 'react'
import './ContactUs.css'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Footer from './Footer'
import { contactDetails } from '../services/Services'
import { Formik } from 'formik'
import { object, string } from 'yup'
const ContactUs = () => {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    }
    const detailsSchema = object({
        firstname: string().required('enter first name'),
        lastname: string().required('enter last name'),
        email: string().email().required('enter email'),
        phone: string().required('enter phone number'),
        message: string().required('please drop a message for us')
    })
    const handleContactDetails = async () => {
        await contactDetails()
    }
    return (
        <>
            <h1 className='text-center p-5'>Contact Us</h1>
            <div>
                <h3 className='text-center'>INFORMATION ABOUT US</h3>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quaerat autem accusantium inventore excepturi id!</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                        <div className='main-color contact-icons'>
                            <FaLocationDot />
                        </div>
                        <h2>Office Location</h2>
                        <p>440 , mount Eden md Eden</p>
                        <p>basundhara Chakrapath</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                        <div className='main-color contact-icons'>
                            <FaPhone />
                        </div>
                        <h2>Phone Number</h2>
                        <p>999-23-323-23</p>
                        <p>424-332-4543</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                        <div className='main-color contact-icons'>
                            <MdEmail />
                        </div>
                        <h2>Email Address</h2>
                        <p>info@realshield.com</p>
                        <p>help@realshield.com</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-6">Map</div>
                    <div className="col-lg-6">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={detailsSchema}
                            onSubmit={handleContactDetails}
                        >
                            {({ formik }) => (


                                <form >
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.firstName}
                                    />

                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.lastName}
                                    />

                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    />

                                    <button type="submit">Submit</button>
                                </form>)}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
