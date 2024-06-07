import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import Titles from '../title/Titles'
const TourGuides = () => {
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
                        <div className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 guides'>
                            <div className="card m-2  " >
                                <img className="card-img-top" src={img1} alt="Card image cap" />
                                <div className="text-center card-body p-0" style={{ background: "rgb(159, 224, 203)" }}>
                                    <h3>Guide Name</h3>
                                    <p>Senior agent</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 guides'>
                            <div className="card m-2" >
                                <img className="card-img-top" src={img2} alt="Card image cap" />
                                <div className="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>head officer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 guides'>
                            <div className="card m-2" >
                                <img className="card-img-top" src={img3} alt="Card image cap" />
                                <div className="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>supervisor</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 guides'>
                            <div className="card m-2" >
                                <img className="card-img-top" src={img4} alt="Card image cap" />
                                <div className="text-center card-body p-0" style={{ background: 'rgb(159, 224, 203)' }}>
                                    <h3>Guide Name</h3>
                                    <p>Quality Assuarance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TourGuides
