import axios from "axios";
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
    console.log(tourData.data, 'datadatadatadata')
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