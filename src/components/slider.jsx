import React from 'react'
import banner from '../../src/asset/image/banner-3.1.png'
// import banner1 from '../../src/asset/image/banner-3.1.png'


const Slider = () => {
    const images = [
        banner,

        // Add more image paths as needed
    ];
    return (

        <div className='slider'>
            <div className='banner'>
                <img src={banner}></img>
            </div>
            <div className='banner-text'>
                <h6>VR BOX 3D Glass</h6>
                <h1>Explore Our Tech Collection Perfect Gadget</h1>
                <div className='banner-btn'>
                    <button className='shop-btn'>Shop Now</button>
                </div>
            </div>

        </div>
    )
}

export default Slider