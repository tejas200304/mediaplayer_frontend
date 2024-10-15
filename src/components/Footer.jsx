import { faInstagram, faFacebook , faTwitter , faLinkedin , faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='container-fluid p-4'>
      <div className='row'>
        <div className="col-md-4">
        <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beatFade className='me-3' />Media Player</h4>
        <p style={{textAlign:'justify'}}className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum laudantium autem ut, asperiores laborum nemo at vitae quis nesciunt in? Vitae voluptatum fuga blanditiis a error, omnis ipsam quas!</p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
          <div>
            <h4>Links</h4>
            <Link to={'/'}><p className='mt-4'>Landing PAge</p></Link>
           <Link to={'/home'}><p>Home Page</p></Link>
            <Link to={'/watchhistory'}><p>Watch History</p></Link>
          </div>
          </div>
        <div className="col-md-2 d-md-flex justify-content-center">
          <div>
            <h4>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
            </div>
         
        </div>
        <div className="col-md-4 px-md-5">
          <h4>Contact Us</h4>
          <div className='mt-4 d-flex'>
            <input type="text" placeholder='Email Id' className='form-control'/>
            <button className='btn btn-warning ms-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
          <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
          <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
          <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>

          </div>
        </div>
        </div>
    </div>
      </>
  )
}

export default Footer