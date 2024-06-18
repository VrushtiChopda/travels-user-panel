import { Formik } from 'formik'
import React, { useState } from 'react'
import { object, string, array, shape } from 'yup'
import { bookingDetails } from '../services/Services'
import { useLocation } from 'react-router-dom'


const Bookings = () => {
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    const [members, setMembers] = useState([])

    const location = useLocation()
    const details = location.state;
    const packId = details.packId

    const formschema = object({
        fullname: string().required('Enter your full name'),
        mobile: string().required('Mobile number is required'),
        gender: string().required('Gender is required'),
        age: string().required('Enter age'),
        email: string().email().required('Email is required'),
        bordingPoint: string().required('Please select the city'),
        members: object().shape({
            pfullname: string().required('enter your full name'),
            pmobile: string().required('mobile number is required'),
            pgender: string().required('gender is required'),
            page: string().required('enter age')
        })
    })

    const handleMemberChange = (index, field, value) => {
        const newMembers = [...members]
        newMembers[index][field] = value
        setMembers(newMembers)
    }

    const addMember = () => {
        if (members.length < 6) {
            setMembers([...members, {
                pfullname: '',
                pmobile: '',
                pgender: '',
                page: ''
            }])
        }
    }

    // const handleForm = async (values, packId) => {
    //     alert("asdasdasdasdasdasdasd")
    //     console.log(values, members)
    //     const payload = { ...values, members }
    //     await bookingDetails(packId, payload)
    // }
    // const saveBookingDetails = async (packId, data) => {
    //     try {
    //         await bookingDetails(packId, data)
    //         // Handle successful booking
    //         console.log('Booking details saved successfully')
    //     } catch (error) {
    //         // Handle errors
    //         console.error('Error saving booking details', error)
    //     }
    // }

    const removeMember = (index) => {
        const newMembers = members.filter((_, i) => i !== index)
        setMembers(newMembers)
    }

    const handleABC = (values) => {
        alert("handleABC")
        console.log(values);
        // Perform actions like sending data to the server
    };

    return (
        <>
            <h1 className='text-center p-5'>Booking</h1>
            <div className='container'>
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
                                members: []
                            }}
                            validationSchema={formschema}
                            onSubmit={handleABC}
                        >
                            {formik => (
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="fullname"
                                                        name="fullname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.fullname}
                                                    />
                                                    <label htmlFor="fullname">Full Name</label>
                                                </div>
                                                {formik.errors.fullname && formik.touched.fullname && (
                                                    <div className="text-danger">{formik.errors.fullname}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <input
                                                        id="mobile"
                                                        name="mobile"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.mobile}
                                                    />
                                                    <label htmlFor="mobile">Phone</label>
                                                </div>
                                                {formik.errors.mobile && formik.touched.mobile && (
                                                    <div className="text-danger">{formik.errors.mobile}</div>
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
                                                <select
                                                    className="form-select mb-2 p-3"
                                                    value={gender}
                                                    onChange={(e) => {
                                                        setGender(e.target.value)
                                                        formik.setFieldValue('gender', e.target.value)
                                                    }}
                                                >
                                                    <option value="" disabled>
                                                        Gender
                                                    </option>
                                                    <option value="Female">
                                                        Female
                                                    </option>
                                                    <option value="Male">
                                                        Male
                                                    </option>
                                                </select>
                                                {formik.errors.gender && formik.touched.gender && (
                                                    <div className="text-danger">{formik.errors.gender}</div>
                                                )}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-floating">
                                                    <div className="form-floating">
                                                        <input
                                                            id="age"
                                                            name="age"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Age"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.age}
                                                        />
                                                        <label htmlFor="age">Age</label>
                                                    </div>
                                                    {formik.errors.age && formik.touched.age && (
                                                        <div className="text-danger">{formik.errors.age}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <select
                                                    className="form-select mb-2 p-3"
                                                    value={city}
                                                    onChange={(e) => {
                                                        setCity(e.target.value)
                                                        formik.setFieldValue('bordingPoint', e.target.value)
                                                    }}
                                                >
                                                    <option value="" disabled>
                                                        City
                                                    </option>
                                                    <option value="Surat">
                                                        Surat
                                                    </option>
                                                    <option value="Amdavad">
                                                        Amdavad
                                                    </option>
                                                    <option value="Rajkot">
                                                        Rajkot
                                                    </option>
                                                    <option value="Bhavnagar">
                                                        Bhavnagar
                                                    </option>
                                                    <option value="Vadodara">
                                                        Vadodara
                                                    </option>
                                                </select>
                                                {formik.errors.bordingPoint && formik.touched.bordingPoint && (
                                                    <div className="text-danger">{formik.errors.bordingPoint}</div>
                                                )}
                                            </div>
                                        </div>
                                        {members.map((member, index) => (
                                            <div key={index} className="container mb-3">
                                                <h5>Member {index + 1}</h5>
                                                <div className="row">
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="form-floating">
                                                            <input
                                                                id={`members.${index}.pfullname`}
                                                                name={`members.${index}.pfullname`}
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Full Name"
                                                                onChange={(e) => handleMemberChange(index, 'pfullname', e.target.value)}
                                                                value={member.pfullname}
                                                            />
                                                            <label htmlFor={`members.${index}.pfullname`}>Full Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="form-floating">
                                                            <input
                                                                id={`members.${index}.pmobile`}
                                                                name={`members.${index}.pmobile`}
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Phone"
                                                                onChange={(e) => handleMemberChange(index, 'pmobile', e.target.value)}
                                                                value={member.pmobile}
                                                            />
                                                            <label htmlFor={`members.${index}.pmobile`}>Phone</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <select
                                                            className="form-select mb-2 p-3"
                                                            value={member.pgender}
                                                            onChange={(e) => handleMemberChange(index, 'pgender', e.target.value)}
                                                        >
                                                            <option value="" disabled>
                                                                Gender
                                                            </option>
                                                            <option value="Female">
                                                                Female
                                                            </option>
                                                            <option value="Male">
                                                                Male
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="form-floating">
                                                            <input
                                                                id={`members.${index}.page`}
                                                                name={`members.${index}.page`}
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Age"
                                                                onChange={(e) => handleMemberChange(index, 'page', e.target.value)}
                                                                value={member.page}
                                                            />
                                                            <label htmlFor={`members.${index}.page`}>Age</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger mb-3"
                                                    onClick={() => removeMember(index)}
                                                >
                                                    Remove Member
                                                </button>
                                            </div>
                                        ))}
                                        <div className='d-flex justify-content-between'>
                                            <button
                                                type="button"
                                                className="btn mb-3"
                                                onClick={addMember}
                                                style={{ background: 'rgb(159, 224, 203)' }}
                                            >
                                                Add Member
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={formik.isSubmitting}
                                                className="btn mb-3"
                                                style={{ background: 'rgb(159, 224, 203)' }}
                                            >
                                                Save Details
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            )}
                        </Formik>
                    </div>
                    <div className="col-lg-5">
                        {/* Additional content can go here */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bookings


// import { Formik } from 'formik'
// import React, { useState } from 'react'
// import { object, string } from 'yup'
// import { bookingDetails } from '../services/Services'
// import { useLocation } from 'react-router-dom'

// const Bookings = () => {
//     const [gender, setGender] = useState('')
//     const [city, setCity] = useState('')
//     const [members, setMembers] = useState([])

//     const location = useLocation()
//     const details = location.state;
//     const packId = details.packId
//     console.log(details, "details")

//     const formschema = () => object({
//         fullname: string().required('enter your full name'),
//         mobile: string().required('mobile number is required'),
//         gender: string().required('gender is required'),
//         age: string().required('enter age'),
//         email: string().email().required('email is required'),
//         bordingPoint: string().required('please select the city'),
//         members: object().shape({
//             pfullname: string().required('enter your full name'),
//             pmobile: string().required('mobile number is required'),
//             pgender: string().required('gender is required'),
//             page: string().required('enter age')
//         })
//     })

//     const handleForm = (values) => {
//         console.log(values, members)
//     }

//     const handleMemberChange = (index, field, value) => {
//         const newMembers = [...members]
//         newMembers[index][field] = value
//         setMembers(newMembers)
//     }

//     const addMember = () => {
//         if (members.length < 6) {
//             setMembers([...members, {
//                 pfullname: '',
//                 pmobile: '',
//                 pgender: '',
//                 page: ''
//             }])
//         }
//     }

//     const saveBookingDetails = async (packId) => {

//         // first create payload which you send in backend
//         // check payload as we want
//         // then after call api
//         // await bookingDetails(packId)
//     }
//     const removeMember = (index) => {
//         const newMembers = members.filter((_, i) => i !== index)
//         setMembers(newMembers)
//     }

//     return (
//         <>
//             <h1 className='text-center p-5'>Booking</h1>
//             <div className='container'>
//                 <div className="row">
//                     <div className="col-lg-7">
//                         <h2>Traveller Information</h2>
//                         <h3>Let Us Know Who You Are</h3>
//                         <Formik
//                             initialValues={{
//                                 fullname: '',
//                                 mobile: '',
//                                 gender: '',
//                                 age: '',
//                                 email: '',
//                                 bordingPoint: '',
//                                 members: []
//                             }}
//                             validationSchema={formschema}
//                             onSubmit={handleForm}
//                         >
//                             {formik => (
//                                 <form onSubmit={formik.handleSubmit}>
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="fullname"
//                                                         name="fullname"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="First Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.fullname}
//                                                     />
//                                                     <label htmlFor="fullname">Full Name</label>
//                                                 </div>
//                                                 {formik.errors.fullname && formik.touched.fullname && (
//                                                     <div className="text-danger">{formik.errors.fullname}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="mobile"
//                                                         name="mobile"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Last Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.mobile}
//                                                     />
//                                                     <label htmlFor="mobile">Phone</label>
//                                                 </div>
//                                                 {formik.errors.mobile && formik.touched.mobile && (
//                                                     <div className="text-danger">{formik.errors.mobile}</div>
//                                                 )}
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
//                                                 {formik.errors.email && formik.touched.email && (
//                                                     <div className="text-danger">{formik.errors.email}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <select
//                                                     className="form-select mb-2 p-3"
//                                                     value={gender}
//                                                     onChange={(e) => {
//                                                         setGender(e.target.value)
//                                                         formik.setFieldValue('gender', e.target.value)
//                                                     }}
//                                                 >
//                                                     <option value="" disabled>
//                                                         Gender
//                                                     </option>
//                                                     <option value="Female">
//                                                         Female
//                                                     </option>
//                                                     <option value="Male">
//                                                         Male
//                                                     </option>
//                                                 </select>
//                                                 {formik.errors.gender && formik.touched.gender && (
//                                                     <div className="text-danger">{formik.errors.gender}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <div className="form-floating">
//                                                         <input
//                                                             id="age"
//                                                             name="age"
//                                                             type="text"
//                                                             className="form-control"
//                                                             placeholder="Age"
//                                                             onChange={formik.handleChange}
//                                                             value={formik.values.age}
//                                                         />
//                                                         <label htmlFor="age">Age</label>
//                                                     </div>
//                                                     {formik.errors.age && formik.touched.age && (
//                                                         <div className="text-danger">{formik.errors.age}</div>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <select
//                                                     className="form-select mb-2 p-3"
//                                                     value={city}
//                                                     onChange={(e) => {
//                                                         setCity(e.target.value)
//                                                         formik.setFieldValue('bordingPoint', e.target.value)
//                                                     }}
//                                                 >
//                                                     <option value="" disabled>
//                                                         City
//                                                     </option>
//                                                     <option value="Surat">
//                                                         Surat
//                                                     </option>
//                                                     <option value="Amdavad">
//                                                         Amdavad
//                                                     </option>
//                                                     <option value="Rajkot">
//                                                         Rajkot
//                                                     </option>
//                                                     <option value="Bhavnagar">
//                                                         Bhavnagar
//                                                     </option>
//                                                     <option value="Vadodara">
//                                                         Vadodara
//                                                     </option>
//                                                 </select>
//                                                 {formik.errors.bordingPoint && formik.touched.bordingPoint && (
//                                                     <div className="text-danger">{formik.errors.bordingPoint}</div>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         {members.map((member, index) => (
//                                             <div key={index} className="container mb-3">
//                                                 <h5>Member {index + 1}</h5>
//                                                 <div className="row">
//                                                     <div className="col-lg-12 mb-3">
//                                                         <div className="form-floating">
//                                                             <input
//                                                                 id={`members.${index}.pfullname`}
//                                                                 name={`members.${index}.pfullname`}
//                                                                 type="text"
//                                                                 className="form-control"
//                                                                 placeholder="Full Name"
//                                                                 onChange={(e) => handleMemberChange(index, 'pfullname', e.target.value)}
//                                                                 value={member.pfullname}
//                                                             />
//                                                             <label htmlFor={`members.${index}.pfullname`}>Full Name</label>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <div className="form-floating">
//                                                             <input
//                                                                 id={`members.${index}.pmobile`}
//                                                                 name={`members.${index}.pmobile`}
//                                                                 type="text"
//                                                                 className="form-control"
//                                                                 placeholder="Phone"
//                                                                 onChange={(e) => handleMemberChange(index, 'pmobile', e.target.value)}
//                                                                 value={member.pmobile}
//                                                             />
//                                                             <label htmlFor={`members.${index}.pmobile`}>Phone</label>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <select
//                                                             className="form-select mb-2 p-3"
//                                                             value={member.pgender}
//                                                             onChange={(e) => handleMemberChange(index, 'pgender', e.target.value)}
//                                                         >
//                                                             <option value="" disabled>
//                                                                 Gender
//                                                             </option>
//                                                             <option value="Female">
//                                                                 Female
//                                                             </option>
//                                                             <option value="Male">
//                                                                 Male
//                                                             </option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <div className="form-floating">
//                                                             <input
//                                                                 id={`members.${index}.page`}
//                                                                 name={`members.${index}.page`}
//                                                                 type="text"
//                                                                 className="form-control"
//                                                                 placeholder="Age"
//                                                                 onChange={(e) => handleMemberChange(index, 'page', e.target.value)}
//                                                                 value={member.page}
//                                                             />
//                                                             <label htmlFor={`members.${index}.page`}>Age</label>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <button
//                                                     type="button"
//                                                     className="btn btn-danger mb-3"
//                                                     onClick={() => removeMember(index)}
//                                                 >
//                                                     Remove Member
//                                                 </button>
//                                             </div>
//                                         ))}
//                                         <div className='d-flex justify-content-between'>
//                                             <button
//                                                 type="button"
//                                                 className="btn mb-3"
//                                                 onClick={addMember}
//                                                 style={{ background: 'rgb(159, 224, 203)' }}
//                                             >
//                                                 Add Member
//                                             </button>
//                                             <button
//                                                 type="submit"
//                                                 disabled={formik.isSubmitting}
//                                                 className="btn mb-3"
//                                                 style={{ background: 'rgb(159, 224, 203)' }}
//                                                 onClick={saveBookingDetails(packId)}>
//                                                 Save Details
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             )}
//                         </Formik>
//                     </div>
//                     <div className="col-lg-5">
//                         {/* Additional content can go here */}
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Bookings



// import { Formik } from 'formik'
// import React, { useState } from 'react'
// import { object, string } from 'yup'

// const Bookings = () => {
//     const [gender, setGender] = useState()
//     const [city, setCity] = useState()

//     const formschema = () => object({
//         fullname: string().required('enter your full name'),
//         mobile: string().required('mobile number is required'),
//         gender: string().required('genter is required'),
//         age: string().required('enter age'),
//         email: string().email().required('email is required'),
//         bordingPoint: string().required('please select the city'),
//         pfullname: string().required('enter your full name'),
//         pmobile: string().required('mobile number is required'),
//         pgender: string().required('genter is required'),
//         page: string().required('enter age')

//     })
//     const handleForm = () => {

//     }
//     return (
//         <>
//             <h1 className='text-center p-5'>Booking</h1>
//             <div className='container'>
//                 <div className="row">
//                     <div className="col-lg-7">
//                         <h2>Traveller Information</h2>
//                         <h3>Let Us Know Who You Are</h3>
//                         <Formik
//                             initialValues={{
//                                 fullname: '',
//                                 mobile: '',
//                                 gender: '',
//                                 age: '',
//                                 email: '',
//                                 bordingPoint: '',
//                                 members:
//                                     [{
//                                         pfullname: '',
//                                         pmobile: '',
//                                         pgender: '',
//                                         page: ''
//                                     }]
//                             }}
//                             validationSchema={formschema}
//                             onSubmit={handleForm}
//                         >
//                             {formik => (
//                                 <form action="">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="fullname"
//                                                         name="fullname"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="First Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.fullname}
//                                                     />
//                                                     <label htmlFor="fullname">Full Name</label>
//                                                 </div>
//                                                 {formik.errors.fullname && formik.touched.fullname && (
//                                                     <div className="text-danger">{formik.errors.fullname}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         id="mobile"
//                                                         name="mobile"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Last Name"
//                                                         onChange={formik.handleChange}
//                                                         value={formik.values.mobile}
//                                                     />
//                                                     <label htmlFor="mobile">Phone</label>
//                                                 </div>
//                                                 {formik.errors.mobile && formik.touched.mobile && (
//                                                     <div className="text-danger">{formik.errors.mobile}</div>
//                                                 )}
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
//                                                 {formik.errors.email && formik.touched.email && (
//                                                     <div className="text-danger">{formik.errors.email}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <select
//                                                     className="form-select mb-2 p-3"
//                                                     value={gender}
//                                                     onChange={(e) => setGender(e.target.value)}
//                                                 >
//                                                     <option selected>
//                                                         Gender
//                                                     </option>
//                                                     <option>
//                                                         Female
//                                                     </option>
//                                                     <option>
//                                                         Male
//                                                     </option>
//                                                 </select>
//                                                 {formik.errors.Phone && formik.touched.Phone && (
//                                                     <div className="text-danger">{formik.errors.Phone}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3">
//                                                 <div className="form-floating">
//                                                     <div className="form-floating">
//                                                         <input
//                                                             id="age"
//                                                             name="age"
//                                                             type="age"
//                                                             className="form-control"
//                                                             placeholder="age Address"
//                                                             onChange={formik.handleChange}
//                                                             value={formik.values.age}
//                                                         />
//                                                         <label htmlFor="age">Age</label>
//                                                     </div>
//                                                     {formik.errors.age && formik.touched.age && (
//                                                         <div className="text-danger">{formik.errors.age}</div>
//                                                     )}
//                                                 </div>
//                                                 {formik.errors.message && formik.touched.message && (
//                                                     <div className="text-danger">{formik.errors.message}</div>
//                                                 )}
//                                             </div>
//                                             <div className="col-lg-12 mb-3 ">

//                                                 <select
//                                                     className="form-select mb-2 p-3"
//                                                     value={city}
//                                                     onChange={(e) => setCity(e.target.value)}
//                                                 >
//                                                     <option selected >
//                                                         City
//                                                     </option>
//                                                     <option >
//                                                         Surat
//                                                     </option>
//                                                     <option>
//                                                         Amdavad
//                                                     </option>
//                                                     <option >
//                                                         Rajkot
//                                                     </option>
//                                                     <option >
//                                                         Bhavnagar
//                                                     </option><option >
//                                                         Vadodara
//                                                     </option>
//                                                 </select>

//                                                 {formik.errors.Phone && formik.touched.Phone && (
//                                                     <div className="text-danger">{formik.errors.Phone}</div>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         <div className='d-flex justify-content-between'>
//                                             <button type="submit" disabled={formik.isSubmitting} className="btn" style={{ background: 'rgb(159, 224, 203)' }}>
//                                                 Add Members
//                                             </button>
//                                             <button type="submit" disabled={formik.isSubmitting} className="btn" style={{ background: 'rgb(159, 224, 203)' }}>
//                                                 Save Details
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             )}
//                         </Formik>
//                     </div>
//                     <div className="col-lg-5">

//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Bookings
	