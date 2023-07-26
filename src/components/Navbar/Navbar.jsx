import './Navbar.css'
import { logo, iconHamburguer } from '../../assets/index'

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">

        <img src={logo} alt="logo" className='logo' />

        <ul>
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

        <a href="#" className='btn-request'>
          Request invite
        </a>

        <img src={iconHamburguer} alt="hamburger" className='iconHamburguer' />


      </div>
    </nav>
  )
}

export default Navbar