import { Grid, Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { object, ref, string } from 'yup';
import './Registration.css'
import { registrationDetails } from '../services/Services';
const Registration = () => {
    const navigate = useNavigate();

    const userSchema = object({
        name: string().required('User Name is required'),
        email: string().required('Email is required').email('Invalid email address'),
        password: string().min(6, 'Password must be at least 6 characters').max(10, 'Password must be at most 10 characters').required('Password  is required'),
        password_confirmation: string()
            .oneOf([ref('password'), null], 'Passwords must match'),
    });

    const handleSubmit = async (data, { setSubmitting }) => {
        const responseData = await registrationDetails(data);
        setSubmitting(false);
        // console.log(data.email, "-----------set email---------------------")
        localStorage.setItem('email', data.email)
        if (responseData.data.status === 200) {
            navigate('/otp', { state: { userData: data } })
        }
        alert(responseData.data.message)
    }
    return (
        <>

            <div className='d-flex justify-content-center'>
                <center>
                    <Paper elevation={6} className='register-container'>
                        <h1>Sign Up</h1>

                        <Formik
                            initialValues={{
                                name: '',
                                password_confirmation: '',
                                email: '',
                                password: ''
                            }}
                            validationSchema={userSchema}
                            onSubmit={handleSubmit}
                        >
                            {(formik) => (

                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="name"
                                                label="User name"
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                autoComplete="name"
                                                autoFocus
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={<ErrorMessage name="name" />}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                autoComplete="email"
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={<ErrorMessage name="email" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="password"
                                                label="Password"
                                                name="password"
                                                type="password"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                autoComplete="password"
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={<ErrorMessage name="password" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="password_confirmation"
                                                label="Re-enter password"
                                                name="password_confirmation"
                                                value={formik.values.password_confirmation}
                                                onChange={formik.handleChange}
                                                autoComplete="password_confirmation"
                                                error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
                                                helperText={<ErrorMessage name="password_confirmation" />}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            style={{ marginTop: '1rem' }}
                                            disabled={formik.isSubmitting}
                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <p>Already have an account ? <Link to='/login' className='registerLink'>Sign In</Link></p>
                                    </Grid>

                                </form>
                            )}
                        </Formik>
                    </Paper>
                </center>
            </div >
        </>
    )
}

export default Registration
