import React, { useEffect } from 'react'
import destination from '../../assets/destination.jpeg'
import destination1 from '../../assets/destination1.jpeg'
import destination3 from '../../assets/destination3.jpeg'
import destination4 from '../../assets/destination4.jpeg'
import Titles from '../title/Titles'
import { getDestinationData } from '../../services/Services'
const TopDestination = () => {
    const destDetail = async () => {
        await getDestinationData()
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
                            <img src={destination} className='w-100 h-100 rounded' alt='zxcsdfvdfbfgbnfgn' />
                            <h1 className='top-left mb-5'>Goa</h1>
                            <h3 className='top-left mt-5 mb-3'>Goa</h3>
                        </div>
                        <div className='col-lg-8 col-sm-12' >
                            <div className='mb-3 destination-container'>
                                <img src={destination1} alt='xcsdcsvdfgdh' className='destination-image rounded' />
                                <h1 className='top-left mb-5'>Greece</h1>
                                <h3 className='top-left mt-5 mb-3'>Europe</h3>
                            </div>
                            <div className='col-lg-12 col-sm-12 d-lg-flex destination-img destination-container' >
                                <div className='w-100 me-0 h-100 me-lg-3 mb-3' >
                                    <img src={destination3} alt='asxsacxsdacsadc' className='w-100 destination-image rounded' />
                                    <h1 className='top-left mb-5'>leh - ladakh</h1>
                                    <h3 className='top-left mt-5 mb-3'>leh - ladakh</h3>
                                </div>
                                <div className='w-100 mb-3 destination-container text-white' >
                                    <img src={destination4} alt='sdcsdvs' className='destination-image rounded' />
                                    {/* <h1 className='top-left mb-5'></h1>
                                    <h3 className='top-left mt-5 mb-3'></h3> */}
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
