import { Field, FieldArray, Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import { bookingDetails } from '../services/Services';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Bookings.css'

const Bookings = () => {
    const location = useLocation();
    const details = location.state;
    const packId = details.packId;
    const navigate = useNavigate()
    const formschema = object({
        fullname: string().required('Enter your full name'),
        mobile: string().required('Mobile number is required'),
        gender: string().required('Gender is required'),
        age: string().required('Enter age'),
        email: string().email().required('Email is required'),
        bordingPoint: string().required('Please select the city'),
    });

    const handleOnSubmit = async (values, { resetForm }) => {
        try {
            alert("Form Submitted");
            console.log(values);
            await bookingDetails(packId, values);
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handlePayment = async (amount) => {
        try {
            alert(amount)
            const res = await axios.post('http://localhost:2000/api/payment/createOrder', { amount });
            const { order } = res.data;
            const options = {
                key: 'rzp_test_Y8Dhs3cgFUhHeS',
                amount: order.amount,
                currency: 'INR',
                name: 'Travel Booking',
                description: 'Booking Payment',
                order_id: order.id,
                handler: async (response) => {
                    const data = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };
                    await axios.post('http://localhost:2000/api/payment/paymentVerification', data);
                    alert('Payment Successful');
                    navigate('/tourdetails')
                },
                theme: {
                    color: '#3399cc',
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error during payment:', error);
        }
    };

    return (
        <>
            <h1 className="text-center p-5">Booking</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2>Traveller Information</h2>
                        <h3>Let Us Know Who You Are</h3>
                        <Formik
                            initialValues={{
                                fullname: '',
                                mobile: '',
                                gender: '',
                                age: '',
                                email: '',
                                bordingPoint: '',
                                members: [],
                            }}
                            validationSchema={formschema}
                            onSubmit={handleOnSubmit}
                        >
                            <Form>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-floating">
                                                <Field
                                                    id="fullname"
                                                    name="fullname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                />
                                                <label htmlFor="fullname">Full Name</label>
                                            </div>
                                            <ErrorMessage name="fullname" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-floating">
                                                <Field
                                                    id="mobile"
                                                    name="mobile"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                />
                                                <label htmlFor="mobile">Phone</label>
                                            </div>
                                            <ErrorMessage name="mobile" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-floating">
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                />
                                                <label htmlFor="email">Email Address</label>
                                            </div>
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <Field
                                                as="select"
                                                className="form-select mb-2 p-3"
                                                name="gender"
                                            >
                                                <option value="" disabled>Gender</option>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                            </Field>
                                            <ErrorMessage name="gender" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-floating">
                                                <Field
                                                    id="age"
                                                    name="age"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Age"
                                                />
                                                <label htmlFor="age">Age</label>
                                            </div>
                                            <ErrorMessage name="age" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <Field
                                                as="select"
                                                className="form-select mb-2 p-3"
                                                name="bordingPoint"
                                            >
                                                <option value="" disabled>City</option>
                                                <option value="Surat">Surat</option>
                                                <option value="Amdavad">Amdavad</option>
                                                <option value="Rajkot">Rajkot</option>
                                                <option value="Bhavnagar">Bhavnagar</option>
                                                <option value="Vadodara">Vadodara</option>
                                            </Field>
                                            <ErrorMessage name="bordingPoint" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <FieldArray name="members">
                                        {({ push, remove, form }) => (
                                            <>
                                                {form.values.members.map((member, index) => (
                                                    <div key={index} className="container mb-3">
                                                        <h5>Member {index + 1}</h5>
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-3">
                                                                <div className="form-floating">
                                                                    <Field
                                                                        name={`members.${index}.pfullname`}
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Full Name"
                                                                    />
                                                                    <label htmlFor={`members.${index}.pfullname`}>Full Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 mb-3">
                                                                <div className="form-floating">
                                                                    <Field
                                                                        name={`members.${index}.pmobile`}
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Phone"
                                                                    />
                                                                    <label htmlFor={`members.${index}.pmobile`}>Phone</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 mb-3">
                                                                <Field
                                                                    as="select"
                                                                    className="form-select mb-2 p-3"
                                                                    name={`members.${index}.pgender`}
                                                                >
                                                                    <option value="" disabled>Gender</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Male">Male</option>
                                                                </Field>
                                                            </div>
                                                            <div className="col-lg-12 mb-3">
                                                                <div className="form-floating">
                                                                    <Field
                                                                        name={`members.${index}.page`}
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Age"
                                                                    />
                                                                    <label htmlFor={`members.${index}.page`}>Age</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger mb-3"
                                                            onClick={() => remove(index)}
                                                        >
                                                            Remove Member
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    className="btn"
                                                    onClick={() => push({ pfullname: '', pmobile: '', pgender: '', page: '' })}
                                                    style={{ background: 'rgb(159, 224, 203)' }}
                                                >
                                                    Add Member
                                                </button>
                                            </>
                                        )}
                                    </FieldArray>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            className="btn mb-3"
                                            style={{ background: 'rgb(159, 224, 203)' }}
                                        >
                                            Save Details
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="col-lg-5">
                        <h2 className='mb-5'>Your Booking Details</h2>
                        <div>
                            <h2>Your Price Summary</h2>
                            <div className="container m-4 p-3 border rounded-1">
                                <div className="row">
                                    <div className="col-lg-8 col-6 p-0 ps-3 book-detail">
                                        <h5>Per Person </h5>
                                        <h5 >Number of travellers</h5>
                                        <h5>tax & Fee</h5>
                                        <h5>Booking Fee</h5>
                                        <hr />
                                        <h5>Amount</h5>
                                        <hr />
                                    </div>
                                    <div className="col-lg-4 col-6 p-0 pe-3 book-detail">
                                        <h5>{details.price}</h5>
                                        <h5>{details.numberOfPeople}</h5>
                                        <h5>No tax</h5>
                                        <h5>Free </h5>
                                        <hr />
                                        <h5>{details.totalPrice}</h5>
                                        <hr />
                                    </div>
                                    <button className='btn' style={{ background: 'rgb(159, 224, 203)' }} onClick={() => handlePayment(details.totalPrice)}>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookings;
