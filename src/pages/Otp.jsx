import React, { useState, useEffect } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { ErrorMessage, Formik, Form } from 'formik';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { number, object } from 'yup';
import './Login.css';
import { otpDetails, resendOtpDetails } from '../services/Services';

const Otp = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const requestedUserData = location.state?.userData;

    useEffect(() => {
        if (requestedUserData) {
            setUserData(requestedUserData);
        }
    }, [requestedUserData]);

    const otpSchema = object({
        otp: number().required('OTP is required')
    });

    const confirmOtp = async (values) => {
        await otpDetails({
            OTP: values.otp,
            email: localStorage.getItem('email')
        });
        navigate('/login');
    };

    const handleResendOtp = async () => {
        // console.log(userData?.email, "<---------otp data ---------------->");
        await resendOtpDetails(userData?.email);
        alert("OTP has been resent successfully.");
    };

    return (
        <>
            <div className='d-flex justify-content-center'>
                <Paper elevation={7} className='main-container'>
                    <Formik
                        initialValues={{ otp: '', email: userData?.email }}
                        validationSchema={otpSchema}
                        onSubmit={confirmOtp}
                    >
                        {({ handleSubmit, setFieldValue, values }) => (
                            <Form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <h3 className='text-center'>Enter OTP</h3>
                                    </Grid>
                                    <Grid item xs={12} className='ms-4'>
                                        <OtpInput
                                            value={values.otp}
                                            onChange={(otp) => setFieldValue('otp', otp)}
                                            numInputs={6}
                                            name="otp"
                                            renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                                            renderInput={(props) => <input {...props} />}
                                            inputStyle={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: '#EDEDEC',
                                                border: 'none',
                                                borderRadius: 10,
                                            }}
                                            focusStyle={{
                                                borderRadius: 20,
                                                outline: 'none',
                                            }}
                                        />
                                        <ErrorMessage name="otp" />
                                        <a href="#" className='resendOtp' onClick={handleResendOtp}>Resend OTP</a>
                                    </Grid>
                                    <Grid item xs={12} className='d-flex justify-content-center'>
                                        <Button
                                            type='submit'
                                            size='large'
                                            variant="outlined"
                                        >
                                            Confirm
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </div>
        </>
    );
};

export default Otp;





// import React from 'react'
// import { Button, Grid, Paper } from '@mui/material';
// import axios from 'axios';
// import { ErrorMessage, Field, Formik, Form } from 'formik';
// import { useState } from 'react';
// import OtpInput from 'react-otp-input';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { number, object } from 'yup';
// import './Login.css'
// import { otpDetails, resendOtpDetails } from '../services/Services';
// const Otp = () => {
//     const [otp, setOtp] = useState('');
//     const [userData, setUserData] = useState(null);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const email = localStorage.getItem('email') || '';

//     const requestedUserData = location.state?.userData;
//     console.log(requestedUserData, "<--------------------------requestedUserData ------------------------------->")
//     if (requestedUserData) {
//         setUserData(requestedUserData)
//     }

//     if (!email) {
//         console.error('No email found in local storage');

//     }

//     const otpSchema = object({
//         otp: number().required('otp is required')
//     })

//     const confirmOtp = async (values) => {
//         await otpDetails({
//             OTP: values.OTP,
//             email: values.email
//         })
//         navigate('/login')
//     }

//     const HandleResendOtp = async (values) => {
//         console.log(requestedUserData.email, "<---------otp data ---------------->")
//         await resendOtpDetails(userData?.email);
//         alert("ghsadgasdghjsadgahsgdjasgdjhgasdhgashdasdgasgdjhasdgadgashg  ");
//     }
//     // const handleOtp = async (values) => {
//     //     console.log("-----values otp")
//     //     const res = await axios.post('http://localhost:2000/api/user/register/verify', {
//     //         otp: values.otp,
//     //         email: values.email
//     //     })
//     //     // console.log(res.data, '--------------')
//     //     // navigate('/update')
//     // }
//     return (
//         <>
//             <div className='d-flex justify-content-center'>
//                 <Paper elevation={7} className='main-container'>
//                     <Formik
//                         initialValues={{ otp: '', email: email }}
//                         validationSchema={otpSchema}
//                         onSubmit={confirmOtp}
//                     >
//                         {({ handleSubmit, setFieldValue, values }) => (
//                             <Form onSubmit={handleSubmit}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12}>
//                                         <h3 className='text-center'>Enter OTP</h3>
//                                     </Grid>
//                                     <Grid item xs={12} className='ms-4'>
//                                         <OtpInput
//                                             value={values.otp}
//                                             onChange={(otp) => setFieldValue('otp', otp)}
//                                             numInputs={6}
//                                             name="otp"
//                                             renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
//                                             renderInput={(props) => <input {...props} />}
//                                             inputStyle={{
//                                                 width: 50,
//                                                 height: 50,
//                                                 backgroundColor: '#EDEDEC',
//                                                 border: 'none',
//                                                 borderRadius: 10,
//                                             }}
//                                             focusStyle={{
//                                                 borderRadius: 20,
//                                                 outline: 'none',
//                                             }}

//                                         ></OtpInput>
//                                         <ErrorMessage name="otp" />
//                                         <a href="#" className='resendOtp' onClick={HandleResendOtp}>Resend OTP</a>
//                                     </Grid>
//                                     <Grid item xs={12} className='d-flex justify-content-center'>
//                                         <Button
//                                             type='submit'
//                                             size='large'
//                                             variant="outlined"
//                                         // disabled={isSubmitting}
//                                         >Confirm</Button>

//                                     </Grid>
//                                 </Grid>
//                             </Form>

//                         )}

//                     </Formik>

//                 </Paper>
//             </div>

//         </>
//     )
// }

// export default Otp
