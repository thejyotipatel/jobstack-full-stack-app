import { useEffect } from 'react'
import { StatsContainer, ChartContainer, Loading } from '../../components'
import { useAppContext } from '../../context/appContext'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </div>
  )
}

export default Stats
