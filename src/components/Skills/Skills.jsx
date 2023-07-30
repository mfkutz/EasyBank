import './Skills.css'
import { iconOnline, iconApi, iconBudgeting, iconOnboarding } from '../../assets/index'

const Skills = () => {
  return (
    <section id='skills'>
      <div className="wrapper">
        <div className='skills-container'>


          <div className="card">
            <img src={iconOnline} alt="Online Banking" />
            <h3 className='tittle-skills'>Online Banking</h3>
            <p className='text-skills'> Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.</p>
          </div>


          <div className="card">
            <img src={iconBudgeting} alt="Online Banking" />
            <h3 className='tittle-skills'>Simple Budgeting</h3>
            <p className='text-skills'> See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.</p>
          </div>

          <div className="card">
            <img src={iconOnboarding} alt="Online Banking" />
            <h3 className='tittle-skills'>Fast Onboarding</h3>
            <p className='text-skills'> We don’t do branches. Open your account in minutes online and start taking control
              of your finances right away.</p>
          </div>

          <div className="card">
            <img src={iconApi} alt="Online Banking" />
            <h3 className='tittle-skills'>Open API</h3>
            <p className='text-skills'>Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.</p>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Skills