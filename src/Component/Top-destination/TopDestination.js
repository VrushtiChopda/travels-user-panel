import React from 'react'
import destination from '../../assets/destination.jpeg'
import destination1 from '../../assets/destination1.jpeg'
import destination3 from '../../assets/destination3.jpeg'
import destination4 from '../../assets/destination4.jpeg'
import Titles from '../title/Titles'
const TopDestination = () => {
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
                            <img src={destination} className='w-100 h-100' alt='zxcsdfvdfbfgbnfgn' style={{ borderRadius: '10px' }} />
                            <h1 className='top-left mb-5'>Goa</h1>
                            <h3 className='top-left mt-5 mb-3'>goa</h3>
                        </div>
                        <div className='col-lg-8 col-sm-12' >
                            <div className='mb-3 destination-container'>
                                <img src={destination1} alt='xcsdcsvdfgdh' style={{ maxWidth: '100%', minWidth: '200px', borderRadius: '10px' }} />
                                <h1 className='top-left mb-5'>Goa</h1>
                                <h3 className='top-left mt-5 mb-3'>goa</h3>
                            </div>
                            <div className='col-lg-12 col-sm-12 d-flex destination-img destination-container' >
                                <div className='w-100 h-100 me-3 mb-3' >
                                    <img src={destination3} alt='asxsacxsdacsadc' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                                    <h1 className='top-left mb-5'>Goa</h1>
                                    <h3 className='top-left mt-5 mb-3'>goa</h3>
                                </div>
                                <div className='w-100 mb-3 destination-container text-white' >
                                    <img src={destination4} alt='sdcsdvs' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                                    <h1 className='top-left mb-5'>Goa</h1>
                                    <h3 className='top-left mt-5 mb-3'>goa</h3>
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
