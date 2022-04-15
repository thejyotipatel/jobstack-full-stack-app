import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Wrapper from '../assets/wrapper/smallSidebar'
import links from '../utils/links'
import { LogoName } from '../components'
import { useAppContext } from '../context/appContext'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  const theme = {
    block: 'block',
    none: 'none',
  }
  return (
    <>
      <Wrapper theme={showSidebar ? theme.block : theme.none}>
        <button className='menu-toggle-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className='navbar'>
          <div className='logo'>
            <LogoName center='center' />
          </div>
          <div className='menu-links'>
            {links.map((item) => {
              const { id, icons, path, text } = item
              return (
                <NavLink
                  to={path}
                  key={id}
                  onClick={toggleSidebar}
                  className={({ isActive }) =>
                    isActive ? 'link  active ' : 'link  '
                  }
                >
                  <i>{icons}</i>
                  <span>{text}</span>
                </NavLink>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}
export default SmallSidebar
