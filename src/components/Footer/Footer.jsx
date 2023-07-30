import './Footer.css'
import Button from '../Button/Button'

import { logo, iconFacebook, iconYoutube, iconTwitter, iconPinterest, iconInstagram } from '../../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">

        <div className="footer-container">

          <div className='logo-social'>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className='social-icons'>
              <a href="#">
                <img src={iconFacebook} alt="" />
              </a>
              <a href="#">
                <img src={iconYoutube} alt="" />
              </a>
              <a href="#">
                <img src={iconTwitter} alt="" />
              </a>
              <a href="#">
                <img src={iconPinterest} alt="" />
              </a>
              <a href="#">
                <img src={iconInstagram} alt="" />
              </a>
            </div>
          </div>

          <ul className='ul-carrers'>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <ul className='ul-carrers'>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>

          <div className='rights-container'>
            <div>
              <Button />
            </div>
            <p className='rights'>© Easybank. All Rights Reserved</p>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer