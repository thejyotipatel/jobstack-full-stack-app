import { useState } from 'react'
import { LogoName } from '../components'
import Wrapper from '../assets/wrapper/navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'

const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext()
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Wrapper>
      <div className='navbar-section'>
        <button className='toggle-btn' type='button' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className='logo-seciton'>
          <LogoName />
          <h1 className='logo-text'>dashboard</h1>
        </div>
        <div className='btn-contant'>
          <button
            className='btn'
            type='button'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            <span>{user?.name}</span>
            <FaCaretDown />
          </button>
          <div className={showLogout ? ' show-dropdown' : '  dropdown '}>
            <button className='dropdown-btn' type='button' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
