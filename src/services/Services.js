import axios from "axios";

//------------------- slider -------------------------------

export const sliderDetails = async (data) => {
    const sliderData = await axios.get('http://localhost:2000/api/slider/getDetail', data)
        // console.log(sliderData.data, "datadtata")
        .then((res) => { return res })
    // .catch((err) => { console.log(err) })
    return sliderData
}

// ---------------Destination Page----------------------

export const getDestinationData = async () => {
    const data = await axios.get('http://localhost:2000/api/destination/getDesti')
        .then((res) => { return res })
        .catch((err) => { console.log(err, "<--------------------Error ----------------------->") })
    console.log(data, "<--------------------------destination -------------------------->")
    return data;
}

//-----------------Tours ------------------------------

export const getTourData = async () => {
    const tourData = await axios.get('http://localhost:2000/api/package/getPackage')
        .then((res) => { return res })
        .catch((err) => { console.log(err) })
    console.log(tourData, 'datadatadatadata')
    return tourData;
}

//------------------Contact -----------------------------

export const contactDetails = async (data) => {
    const details = await axios.post('http://localhost:2000/api/contact/postDetail', data)
    console.log(details.data, '------------------')
        .then((res) => { return res })
        .catch((err) => { console.log(err) })
    return details;
}

//----------------- register -----------------------------

export const registrationDetails = async (data) => {
    const register = await axios.post('http://localhost:2000/api/user/register', data)
        .then((res) => {
            return res
        })
        .catch((err) => { console.log(err) })
    return register;
}

//------------------ verify otp----------------------------
export const otpDetails = async (data) => {
    const otp = await axios.post('http://localhost:2000/api/user/register/verify', data)
        .then((res) => {
            console.log(res, 'otpotpotpotpotp')
            return res
        })
        .catch((err) => { console.log(err) })
    return otp;
}

//-------------------- Resend otp-----------------------------

export const resendOtpDetails = async (data) => {
    const resendOtp = await axios.post('http://localhost:2000/api/user/register/resend', { email: data })
        .then((res) => {
            return res
        })
        .catch((err) => { console.log(err) })
    return resendOtp;
}

//-------------------- Login -------------------------------

export const loginDetails = async (data) => {
    // console.log(data, "<==========================sdffdsgdfgdfg=============s==================>")
    const login = await axios.post('http://localhost:2000/api/user/login', data)
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err)
        })
    return login
}

//--------------------- booking ---------------------------------

export const bookingDetails = async (packId, values) => {
    const userToken = localStorage.getItem('token')
    console.log(userToken, 'userTokenuserTokenuserTokenuserToken')
    const booking = await axios.post(`http://localhost:2000/api/booking/insertBookDetail/${packId}`, values, {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    })
    console.log(booking.data, 'booking data')
}

