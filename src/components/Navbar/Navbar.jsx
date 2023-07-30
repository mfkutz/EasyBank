import './Navbar.css'
import { logo, iconHamburguer, iconClose } from '../../assets/index'
import Button from '../Button/Button'
import { useState } from 'react'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)




  return (
    <nav>
      <div className="wrapper">

        <img src={logo} alt="logo" className='logo' />

        <ul className='desktop'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
        </ul>

        <div className={`mobile ${menuOpen ? '' : 'inactive'}`}>

          <a href="#">Home</a>


          <a href="#">About</a>


          <a href="#">Contact</a>


          <a href="#">Blog</a>


          <a href="#">Carrers</a>

        </div>

        <Button prop={'disabled'} />


        <img onClick={() => setMenuOpen(true)} src={iconHamburguer} alt="hamburger" className={`iconHamburguer ${menuOpen ? 'inactive' : ''} `} />

        <img onClick={() => setMenuOpen(false)} src={iconClose} alt="close" className={`iconClose ${menuOpen ? '' : 'inactive'}`} />


      </div>
    </nav>
  )
}

export default Navbar