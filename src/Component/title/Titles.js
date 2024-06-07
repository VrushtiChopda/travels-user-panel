import React from 'react'

const Titles = ({ title, Subtitle, desc, diffColor }) => {
    return (
        <>
            <div className='text-center mt-5'>
                <h2 style={{ color: 'rgb(235, 190, 113)' }}>{title}</h2>
                <h1 className='main-color'><span style={{ color: 'black' }} >{diffColor}</span> {Subtitle}</h1>
                <p>{desc}</p>
                
            </div>
        </>
    )
}

export default Titles
