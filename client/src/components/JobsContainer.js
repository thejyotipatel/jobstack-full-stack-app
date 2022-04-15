import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrapper/jobContainer'

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
  } = useAppContext()

  useEffect(() => {
    getJobs()
  }, [search, searchStatus, searchType, sort, page])

  if (jobs.length === 0) {
    return <p className='no-jobs'>No jobs to display...</p>
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <Wrapper>
      <h4 className='total-jobs'>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h4>
      <div className='jobs-contaner'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}
export default JobsContainer
