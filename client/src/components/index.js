import InputCmponent from './InputCmponent'
import Alert from './Alert'
import logosvg from '../assets/images/logo.png'
import Navbar from './Navbar'
import BigSidebar from './BigSidebar'
import SmallSidebar from './SmallSidebar'
import Loading from './Loading'
import FormRowSelect from './FormRowSelect'
import SearchContainer from './SearchContainer'
import JobsContainer from './JobsContainer'
import JobInfo from './JobInfo'
import Job from './Job'
import StatsContainer from './StatsContainer'
import ChartContainer from './ChartContainer'
import BtnContainer from './BtnContainer'

import styled from 'styled-components'

const LogoName = ({ center }) => {
  return (
    <Wrapper center={center}>
      <img src={logosvg} alt='logosvg' />
      <h3>JobStack</h3>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.center || 'flex-start'};
  align-items: center;
  h3 {
    color: var(--main-color-1);
    text-transform: capitalize;
    font-size: 24px;
    margin-left: 0.5rem;
  }
  img {
    width: min(90%, 40px);
  }
`
export {
  InputCmponent,
  Alert,
  LogoName,
  Navbar,
  BigSidebar,
  SmallSidebar,
  Loading,
  FormRowSelect,
  SearchContainer,
  JobsContainer,
  JobInfo,
  Job,
  StatsContainer,
  ChartContainer,
  BtnContainer,
}
