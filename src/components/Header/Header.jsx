import './Header.css'
import { bgIntroDesktop, bgIntroMobile, imgMockups } from '../../assets/index'
import Button from '../Button/Button'


const Header = () => {
    return (
        <header>

            <div className='header-container'>


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



                <div className='right'>
                    <img src={bgIntroDesktop} alt="" className='bgIntroDesktop' />
                    <img src={bgIntroMobile} alt="" className='bgIntroMobile' />

                    <img src={imgMockups} alt="" className='imgMockups' />

                </div>


            </div>

        </header>
    )
}

export default Header