import img from '../assets/images/undraw_page_not_found_re_e9o6.svg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Wrapper from '../assets/wrapper/errorPage'

const Error = () => {
  return (
    <Wrapper>
      <img src={img} alt='not found' />
      <h3>There's NOTHING here...</h3>
      <p>...maybe the page you looking for is not found or never existed.</p>
      <Link to='/'>
        back to home
        <BsArrowRight />
      </Link>
    </Wrapper>
  )
}
export default Error
