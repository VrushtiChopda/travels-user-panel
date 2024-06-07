import React, { useEffect } from 'react'
import { Carousel } from "mdb-ui-kit";
import 'mdb-ui-kit/css/mdb.min.css';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";



import Footer from './Footer';


import Slider from '../Component/slider/Slider';
import TopDestination from '../Component/Top-destination/TopDestination';
import TourPackages from '../Component/TourPackages/TourPackages';
import TourGuides from '../Component/TourGuides/TourGuides';
import CoreFeatures from '../Component/core-features/CoreFeatures';





const Home = () => {

    return (
        <>
            {/* -----------------slider---------------- */}
            <Slider />
            {/* -------------------Core Features------------------------ */}
            <CoreFeatures />
            {/* ---------------------Top destinations-------------------------- */}\
            <TopDestination />

            {/* -------------------Tour packages---------------------- */}
            <TourPackages />

            {/* ---------------------- Tour Guides-------------------- */}
            <TourGuides />

            {/* ---------------------- Footer-------------------- */}
            <Footer />
        </>
    )
}

export default Home
