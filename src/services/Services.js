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

export const contactDetails = async () => {
    const details = await axios.post('http://localhost:2000/api/contact/postDetail')
    console.log(details.data, '------------------')
        .then((res) => { return res })
        .catch((err) => { console.log(err) })
    return details;
}