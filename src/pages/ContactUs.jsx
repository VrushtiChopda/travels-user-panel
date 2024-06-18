import React from 'react';
import './ContactUs.css';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Footer from './Footer';
import { contactDetails } from '../services/Services';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    };

    const detailsSchema = object({
        firstname: string().required('Enter first name'),
        lastname: string().required('Enter last name'),
        email: string().email().required('Enter email'),
        phone: string().required('Enter phone number'),
        message: string().required('Please drop a message for us')
    });

    const handleContactDetails = async (data, { setSubmitting, resetForm }) => {
        await contactDetails(data);
        setSubmitting(false);
        resetForm();
    }

    return (
        <>
            <h1 className='text-center p-5'>Contact Us</h1>
            <div>
                <h3 className='text-center'>INFORMATION ABOUT US</h3>
                <p className='text-center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quaerat autem accusantium inventore excepturi id!
                </p>
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
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-6">Map</div>
                    <div className="col-lg-6">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={detailsSchema}
                            onSubmit={handleContactDetails}
                        >
                            {formik => (
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="firstname"
                                                        name="firstname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.firstname}
                                                    />
                                                    <label htmlFor="firstname">First Name</label>
                                                </div>
                                                {formik.errors.firstname && formik.touched.firstname && (
                                                    <div className="text-danger">{formik.errors.firstname}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="lastname"
                                                        name="lastname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.lastname}
                                                    />
                                                    <label htmlFor="lastname">Last Name</label>
                                                </div>
                                                {formik.errors.lastname && formik.touched.lastname && (
                                                    <div className="text-danger">{formik.errors.lastname}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                    />
                                                    <label htmlFor="email">Email Address</label>
                                                </div>
                                                {formik.errors.email && formik.touched.email && (
                                                    <div className="text-danger">{formik.errors.email}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.phone}
                                                    />
                                                    <label htmlFor="phone">Phone</label>
                                                </div>
                                                {formik.errors.phone && formik.touched.phone && (
                                                    <div className="text-danger">{formik.errors.phone}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        className="form-control"
                                                        placeholder="Drop a message"
                                                        style={{ height: '100px' }}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.message}
                                                    ></textarea>
                                                    <label htmlFor="message">Drop a message</label>
                                                </div>
                                                {formik.errors.message && formik.touched.message && (
                                                    <div className="text-danger">{formik.errors.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit" disabled={formik.isSubmitting} className="btn" style={{ background: 'rgb(159, 224, 203)' }}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;

// import './ContactUs.css'
// import { FaLocationDot } from 'react-icons/fa6'
// import { FaPhone } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'
// import Footer from './Footer'
// import { contactDetails } from '../services/Services'
// import { Formik } from 'formik'
// import { object, string } from 'yup'
// import { Button, Form } from 'react-bootstrap'
// const ContactUs = () => {
//     const initialValues = {
//         firstname: '',
//         lastname: '',
//         email: '',
//         phone: '',
//         message: ''
//     }
//     const detailsSchema = object({
//         firstname: string().required('enter first name'),
//         lastname: string().required('enter last name'),
//         email: string().email().required('enter email'),
//         phone: string().required('enter phone number'),
//         message: string().required('please drop a message for us')
//     })
//     const handleContactDetails = async (data, { setSubmitting }) => {
//         alert(data, "<--------------------------------handle contact detail-------------------------->")
//         await contactDetails(data)
//         setSubmitting(false);
//     }
//     return (
//         <>
//             <h1 className='text-center p-5'>Contact Us</h1>
//             <div>
//                 <h3 className='text-center'>INFORMATION ABOUT US</h3>
//                 <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quaerat autem accusantium inventore excepturi id!</p>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center">
//                         <div className='main-color contact-icons'>
//                             <FaLocationDot />
//                         </div>
//                         <h2>Office Location</h2>
//                         <p>440 , mount Eden md Eden</p>
//                         <p>basundhara Chakrapath</p>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center">
//                         <div className='main-color contact-icons'>
//                             <FaPhone />
//                         </div>
//                         <h2>Phone Number</h2>
//                         <p>999-23-323-23</p>
//                         <p>424-332-4543</p>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center">
//                         <div className='main-color contact-icons'>
//                             <MdEmail />
//                         </div>
//                         <h2>Email Address</h2>
//                         <p>info@realshield.com</p>
//                         <p>help@realshield.com</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='container my-5'>
//                 <div className="row">
//                     <div className="col-lg-6">Map</div>
//                     <div className="col-lg-6">
//                         <Formik
//                             initialValues={initialValues}
//                             validationSchema={detailsSchema}
//                             onSubmit={(values) => {
//                                 handleContactDetails(values)
//                             }}
//                         >
//                             {(formik) => (

//                                 <Form onSubmit={formik.handleContactDetails}>
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="firstname"
//                                                         name="firstname"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="First Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.firstname}
//                                                     />
//                                                     <label htmlFor="firstName">First Name</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="lastname"
//                                                         name="lastname"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Last Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.lastname}
//                                                     />
//                                                     <label htmlFor="lastname">Last Name</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="email"
//                                                         name="email"
//                                                         type="email"
//                                                         className="form-control"
//                                                         placeholder="Email Address"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.email}
//                                                     />
//                                                     <label htmlFor="email">Email Address</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="phone"
//                                                         name="phone"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Phone"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.phone}
//                                                     />
//                                                     <label htmlFor="phone">Phone</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <textarea
//                                                         id="message"
//                                                         name="message"
//                                                         className="form-control"
//                                                         placeholder="Drop a message"
//                                                         style={{ height: '100px' }}
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.message}
//                                                     ></textarea>
//                                                     <label htmlFor="message">Drop a message</label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <Button type="btn submit" disabled={formik.isSubmitting}>Submit</Button>
//                                     </div>
//                                 </Form>

//                                 // <Form>
//                                 //     <div className="container">
//                                 //         <div className="row">
//                                 //             <div className="col-lg-12">
//                                 //                 <label htmlFor="firstName">First Name</label>
//                                 //                 <input
//                                 //                     id="firstName"
//                                 //                     name="firstName"
//                                 //                     type="text"
//                                 //                 // onChange={formik.handleChange}
//                                 //                 // value={formik.values.firstName}
//                                 //                 />
//                                 //             </div>
//                                 //             <div className='col-lg-12'>
//                                 //                 <label htmlFor="lastname">Last Name</label>
//                                 //                 <input
//                                 //                     id="lastName"
//                                 //                     name="lastName"
//                                 //                     type="text"
//                                 //                 // onChange={formik.handleChange}
//                                 //                 // value={formik.values.lastName}
//                                 //                 />
//                                 //             </div>
//                                 //             <div className='col-lg-12'>
//                                 //                 <label htmlFor="email">Email Address</label>
//                                 //                 <input
//                                 //                     id="email"
//                                 //                     name="email"
//                                 //                     type="email"
//                                 //                 // onChange={formik.handleChange}
//                                 //                 // value={formik.values.email}
//                                 //                 />
//                                 //             </div>
//                                 //             <div className='col-lg-12'>
//                                 //                 <label htmlFor="phone">Phone</label>
//                                 //                 <input
//                                 //                     id="phone"
//                                 //                     name="phone"
//                                 //                     type="text"
//                                 //                 // onChange={formik.handleChange}
//                                 //                 // value={formik.values.phone}
//                                 //                 />
//                                 //             </div>
//                                 //             <div className='col-lg-12'>
//                                 //                 <label htmlFor="message">drop a message</label>
//                                 //                 <input
//                                 //                     id="message"
//                                 //                     name="message"
//                                 //                     type="textarea"
//                                 //                 // onChange={formik.handleChange}
//                                 //                 // value={formik.values.message}
//                                 //                 />
//                                 //             </div>
//                                 //         </div>
//                                 //     </div>
//                                 //     <Button type="btn btn-primary submit">Submit</Button>
//                                 // </Form>
//                             )}
//                         </Formik>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default ContactUs



