import { InputCmponent, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrapper/addJob'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!company || !position || !jobLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <h1> {isEditing ? 'edit Job' : 'Add Job'}</h1>
      <form className='form-control' onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <div className='input-controls'>
          {/* position */}
          <InputCmponent
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* compony */}
          <InputCmponent
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <InputCmponent
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            list={statusOptions}
            value={status}
            handleChange={handleJobInput}
            name='status'
          />

          {/* job type */}
          <FormRowSelect
            list={jobTypeOptions}
            value={jobType}
            handleChange={handleJobInput}
            name='jobType'
            labelText='job Type'
          />
        </div>
        <div className='btn-control'>
          <button className='submit-btn' disabled={isLoading}>
            Submit
          </button>
          <button
            className='clear-btn'
            onClick={(e) => {
              e.preventDefault()
              clearValues()
            }}
          >
            clear
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
