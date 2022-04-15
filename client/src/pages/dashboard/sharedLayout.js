import { Outlet } from 'react-router-dom'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'
import styled from 'styled-components'
import { useAppContext } from '../../context/appContext'

const SharedLayout = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper theme={showSidebar ? 'inline' : 'grid'}>
      <div className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div className='center-page'>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: 1445px;
  margin-inline: auto;
  .dashboard {
    display: ${(props) => props.theme};
    grid-template-columns: 20% 80%;
  }
  .center-page {
    display: grid;
  }
  .dashboard-page {
    background: var(--bg-color-2);
    width: 100%;
    color: var(--text-color-1);
    height: calc(100vh - 50px);
    padding-top: 50px;
    box-shadow: inset 2px 2px 2px 0px hsl(0deg 0% 0% / 10%);
    margin-inline: auto;
    overflow-y: auto;
  }

  @media screen and (max-width: 945px) {
    .dashboard {
      display: block;
    }
  }
`
export default SharedLayout
