import { useState, useEffect } from 'react'
import { InputCmponent, Alert, LogoName } from '../components'
import Wrapper from '../assets/wrapper/loginAndRegister'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initalState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(initalState)
  const { user, displayAlert, isLoading, showAlert, registerUser, loginUser } =
    useAppContext()

  const toggleChange = () => {
    setValue({ ...value, isMember: !value.isMember })
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, name, password, isMember } = value
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { email, name, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <LogoName center={'center'} />
      <form className='form-controls' onSubmit={onSubmit}>
        <h1>{value.isMember ? 'Login' : 'register'}</h1>
        {showAlert && <Alert />}

        {!value.isMember && (
          <InputCmponent
            value={value.name}
            name='name'
            type='text'
            labelText='name'
            handleChange={handleChange}
          />
        )}

        <InputCmponent
          value={value.email}
          name='email'
          type='email'
          labelText='email'
          handleChange={handleChange}
        />
        <InputCmponent
          value={value.password}
          name='password'
          type='password'
          labelText='password'
          handleChange={handleChange}
        />
        <button type='submit' disabled={isLoading} className='btn'>
          Submit
        </button>
        <p className='toggle-contant'>
          {value.isMember ? 'Not Register yet? ' : 'Already Registered? '}
          <button type='button' className=' btn-toggle' onClick={toggleChange}>
            {!value.isMember ? 'Login' : 'Register'}
          </button>
          here
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
