import { SearchContainer, JobsContainer, BtnContainer } from '../../components'
import { useAppContext } from '../../context/appContext'

const AllJobs = () => {
  const { numOfPages } = useAppContext()
  return (
    <>
      <SearchContainer />
      <JobsContainer />
      {numOfPages > 0 && <BtnContainer />}
    </>
  )
}

export default AllJobs
