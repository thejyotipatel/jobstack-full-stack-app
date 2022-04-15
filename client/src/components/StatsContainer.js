import StatsItem from './StatsItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrapper/statsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#cca700',
      bgColor: '#ffd00033',
    },
    {
      title: 'interview scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#0003b3',
      bgColor: '#0004ff33',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#cc4100',
      bgColor: '#ff510033',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
