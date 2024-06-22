import React, { useEffect, useState } from 'react'
import Titles from '../title/Titles'
import { GuideDetails } from '../../services/Services'
const TourGuides = () => {
    const [guides, setGuides] = useState(null)

    useEffect(() => {
        const getGuides = async () => {
            const res = await GuideDetails()
            console.log(res, "guide details")
            setGuides(res)
        }
        getGuides()
    }, [])

    return (
        <>
            <div>
                <Titles
                    title='Tour Guides'
                    diffColor='Meet '
                    Subtitle='Our Excellent Guides'
                    desc='"Exceptional Guides for Unforgotable journey"'
                />
                <div className="container mb-5">
                    <div className="row ">

                        {
                            guides && guides.data.map((data) => (
                                <div className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 guides'>
                                    <div className="card m-2  " >
                                        <img className="card-img-top" src={data.imageUrl} alt="Card cap" />
                                        <div className="text-center card-body p-0" style={{ background: "rgb(159, 224, 203)" }}>
                                            <h3>{data.name}</h3>
                                            <p>{data.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default TourGuides
