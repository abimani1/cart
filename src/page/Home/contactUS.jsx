import React from 'react'
import phone from '../../asset/image/contact/phone_ring.svg'
import email from '../../asset/image/contact/email.svg'
import map from '../../asset/image/contact/map.svg'
import borderStyle from '../../asset/image/contact/border.svg'
import mapPage from '../../asset/image/contact/mapImage.jpg'
import '../../asset/Style/contactUs.css'

const ContactUS = () => {
  return (
    <div>
      <div className="title-box">
        <p>Contact</p>
      </div>
      <div className="container-x">
        <div className="w-full">
          <div className="contact-box">
            <div className="contact-info-card">
              <div className="info-title">
                <h2>Contact Information</h2>
                <p>Fill the form below or write us .We will help you as soon as possible.</p>
              </div>
              <div className='info-box'>
                <div className="phone-box">
                  <img src={phone} alt="Phone" />
                  <h3>Phone</h3>
                  <p>+(323) 9847 3847 383</p>
                  <p>+(434) 5466 5467 443</p>
                </div>
                <div className="email-box">
                  <img src={email} alt="email" />
                  <h3>Email</h3>
                  <p>Demoemail@gmail.com</p>
                  <p>rafiqulislamsuvobd@gmail.com</p>
                </div>
              </div>
              <div className="map-box">
                <div className="map-content-box">
                  <div className="map-logo">
                    <img src={map} alt="map" />
                  </div>
                  <div className="map-content">
                    <h2>Address</h2>
                    <p>4517 Washington Ave. Manchester, Road 2342,Kentucky 39495</p>
                  </div>
                </div>
                <div className='map-page'>
                  <img src={mapPage} alt="map" width={600} height={190} />
                </div>
              </div>
            </div>
            <div className="getTouch-card">
              <div className="getTouch-title">
                <h1>Get In Touch</h1>
                <img src={borderStyle} alt="border" />
              </div>
              <form>
                <div className="inputBox">
                  <label>First Name*</label>
                  <input type="text"  placeholder='Enter your Name'/>
                </div>
                <div className="inputBox">
                  <label>Email Address*</label>
                  <input type="text"  placeholder='Enter your Email'/>
                </div>
                <div className="inputBox">
                  <label>Subject*</label>
                  <input type="text"  placeholder='Enter your Subject'/>
                </div>
                <div className="inputBox">
                  <label>Message*</label>
                  <textarea placeholder='Enter your Message'/>
                </div>
                <button>send now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUS