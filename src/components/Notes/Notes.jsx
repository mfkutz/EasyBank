import './Notes.css'
import { imgCurrency, imgRestaurant, imgPlane, imgConfetti } from '../../assets/index'


const Notes = () => {
  return (
    <section id='notes'>
      <div className="wrapper">
        <h2 className='tittle-notes'>Latest Articles</h2>
        <div className="articles-container">

          <div className="article-card">
            <img src={imgCurrency} alt="currency" className='img-article' />

            <div className="date-note">
              <p className="by-person">By Claire Robinson</p>
              <h4 className='skill'><a href="#" className='skill-link'>Receive money in any currency with no fees</a> </h4>
              <p className='declaration'>The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …</p>
            </div>
          </div>


          <div className="article-card">
            <img src={imgRestaurant} alt="currency" className='img-article' />

            <div className="date-note">
              <p className="by-person">By Wilson Hutton</p>
              <h4 className='skill'><a href="#" className='skill-link'>Treat yourself without worrying about money</a> </h4>
              <p className='declaration'> Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …</p>
            </div>
          </div>

          <div className="article-card">
            <img src={imgPlane} alt="currency" className='img-article' />

            <div className="date-note">
              <p className="by-person">By Wilson Hutton</p>
              <h4 className='skill'><a href="#" className='skill-link'>Take your Easybank card wherever you go</a> </h4>
              <p className='declaration'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …</p>
            </div>
          </div>

          <div className="article-card">
            <img src={imgConfetti} alt="currency" className='img-article' />

            <div className="date-note">
              <p className="by-person">By Claire Robinson</p>
              <h4 className='skill'><a href="#" className='skill-link'>Our invite-only Beta accounts are now live!</a> </h4>
              <p className='declaration'>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                It’s easy to request an invite through the site ...</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Notes