import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import Wrapper from '../assets/wrapper/bigSidebar'
import { LogoName } from '../components'
import { useAppContext } from '../context/appContext'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()

  return (
    <Wrapper theme={showSidebar ? 'none' : 'block'}>
      <div className='logo'>
        <LogoName />
      </div>
      <div className='menu-links'>
        {links.map((item) => {
          const { id, icons, path, text } = item
          return (
            <NavLink
              key={id}
              to={path}
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
    </Wrapper>
  )
}

export default BigSidebar
