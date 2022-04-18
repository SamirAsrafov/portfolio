import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
  return (
    <div className='services'>
      <h1 className='py-5'>Our services</h1>
      <div className='container'>
        <div className="row">

          {/* Google seo xidmetleri */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="box-front">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle} className='s-icon' />
              </div>
              <h2>SEO</h2>
              <p>SEO SERVICE.</p>
            </div>
            <div className="box-back">
              <h2 className='back-title'>GOOGLE CEO SERVICES</h2>
            </div>

            </div>
         
          </div>

          {/* Web development ile elaqeli sahe */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="box-front">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} className='s-icon' />
              </div>
              <h2>WEB</h2>
              <p>W-DEV SERVICE</p>
            </div>
            <div className="box-back">
              <h2 className='back-title'>WEB-DEVELOPMENT SECTION</h2>
            </div>

            </div>
         
          </div>

          {/* Facebook Marketing SMM */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="box-front">
              <div className="circle">
                <FontAwesomeIcon icon={faFacebookF} className='s-icon' />
              </div>
              <h2> SMM GROUP</h2>
              <p>SOCIAL MEDIA MARKETING</p>
            </div>
            <div className="box-back">
              <h2 className='back-title'>FACEBOOK SMM</h2>
            </div>

            </div>
         
          </div>

          {/* IT */}
         
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="box-front">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop} className='s-icon' />
              </div>
              <h2>IT,HELPDESK</h2>
              <p>INFORMATION TECHNOLOGIES SERVICE</p>
            </div>
            <div className="box-back">
              <h2 className='back-title'>IT SECTION</h2>
            </div>

            </div>
         
          </div>


        </div>
      </div>

    </div>
  )
}

export default Services 