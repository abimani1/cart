import React, { Fragment } from 'react'
import aboutUsImg from '../../asset/image/aboutUs/about-banner.png'
import '../../asset/Style/aboutUs.css'

const AboutUs = () => {

  return (
    <Fragment>
        <div className="title-box">
            <p>About Us</p>
        </div>
        <div className="container-x">
            <div className="aboutUs-box">
                <div className="card-image">
                    <img src={aboutUsImg} alt="about Us" />
                </div>
                <div className="card-content">
                    <div className='card-content-text'>
                        <h3>What is e-commerce business?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                        <ul>
                            <li>slim body with metal cover</li>
                            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                        </ul>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default AboutUs