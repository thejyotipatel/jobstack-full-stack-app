import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrapper/landing'
import img from '../assets/images/undraw_job_hunt_re_q203.svg'
import { LogoName } from '../components'

const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <LogoName />
        </nav>
        <div className='desc-section'>
          <div className='page'>
            <h1>
              Job <span>Serching</span> App
            </h1>
            <p>
              Find you dream job here. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Asperiores impedit vitae nemo magnam quam
              doloremque velit explicabo assumenda libero voluptatibus
              perspiciatis omnis quis.
            </p>
            <Link to='/register'>Login/Register</Link>
          </div>
          <img
            src={img}
            alt='undraw_job_hunt_re_q203.svg'
            className='img-contant'
          />
        </div>
      </Wrapper>
    </>
  )
}

export default Landing
