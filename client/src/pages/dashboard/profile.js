import { useState } from 'react'
import { InputCmponent, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrapper/profile'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }
  return (
    <Wrapper>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit} className='form-control'>
        {showAlert && <Alert />}
        <div className='input-controls'>
          <InputCmponent
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <InputCmponent
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <InputCmponent
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputCmponent
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'please wait...' : 'Save changes'}
        </button>
      </form>
    </Wrapper>
  )
}
export default Profile
