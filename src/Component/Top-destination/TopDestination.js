import React, { useEffect, useState } from 'react'
// import destination from '../../assets/destination.jpeg'
// import destination1 from '../../assets/destination1.jpeg'
// import destination3 from '../../assets/destination3.jpeg'
// import destination4 from '../../assets/destination4.jpeg'
import Titles from '../title/Titles'
import { getDestinationData } from '../../services/Services'
const TopDestination = () => {
    const [destination, setDestination] = useState([])
    const destDetail = async () => {
        const res = await getDestinationData()
        setDestination(res.data)
    }
    useEffect(() => {
        destDetail()
    }, [])
    return (
        <>
            <div className='mb-3'>
                <Titles
                    title='Top Destinations'
                    diffColor='Explore '
                    Subtitle='Top Destinations'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta atque maxime dolor nam non quos sequi odit magnam officiis?'
                />
                <div className='container  '>
                    <div className="row">
                        <div className='col-lg-4 col-sm-12 mb-3 destination-container' >
                            <img src={destination[0].imageUrl} className='w-100 h-100 rounded' alt='zxcsdfvdfbfgbnfgn' />
                            <h1 className='top-left mb-5'>{destination[0].place}</h1>
                            <h3 className='top-left mt-5 mb-3'>{destination[0].state}</h3>
                        </div>
                        <div className='col-lg-8 col-sm-12' >
                            <div className='mb-3 destination-container'>
                                <img src={destination[1].imageUrl} alt='xcsdcsvdfgdh' className='destination-image rounded' />
                                <h1 className='top-left mb-5'>{destination[1].place}</h1>
                                <h3 className='top-left mt-5 mb-3'>{destination[1].state}</h3>
                            </div>
                            <div className='col-lg-12 col-sm-12 d-lg-flex destination-img destination-container' >
                                <div className='w-100 me-0 h-100 me-lg-3 mb-3' >
                                    <img src={destination[2].imageUrl} alt='asxsacxsdacsadc' className='w-100 destination-image rounded' />
                                    <h1 className='top-left mb-5'>{destination[2].place}</h1>
                                    <h3 className='top-left mt-5 mb-3'>{destination[2].state}</h3>
                                </div>
                                <div className='w-100 mb-3 destination-container text-white' >
                                    <img src={destination[3].imageUrl} alt='sdcsdvs' className='destination-image rounded' />
                                    <h1 className='top-left mb-5'>{destination[3].place}</h1>
                                    <h3 className='top-left mt-5 mb-3'>{destination[3].state}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDestination
