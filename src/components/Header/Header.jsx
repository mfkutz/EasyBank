import Button from '../Button/Button'
import './Header.css'
import { bgIntroDesktop, imgMockups } from '../../assets/index'

const Header = () => {
  return (
    <header>
      <div className="header-container">


        <div className="left">
          <h1>
            Next generation <br />
            digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be
            a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>

          <div className={'btn-container'}>
            <Button />

          </div>

        </div>

        <div className="right">
          {/* <img src={bgIntroDesktop} alt="" className='bg-desktop'/> */}
          {/* <img src={imgMockups} alt="" className='img-mockups' /> */}
        </div>
      </div>

    </header>
  )
}

export default Header