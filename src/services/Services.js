import axios from "axios";
// ---------------Destination Page----------------------

export const getDestinationData = async () => {
    const data = await axios.get('http://localhost:2000/api/destination/getDesti')
        .then((res) => { return res })
        .catch((err) => { console.log(err, "<--------------------Error ----------------------->") })
    console.log(data, "<--------------------------destination -------------------------->")
    return data;
}