import styled from 'styled-components'

const InputCmponent = ({ value, name, type, labelText, handleChange }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className=' label '>
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='input-control'
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
  }
  .input-control {
    box-shadow: var(--box-inset-shadow);
    background-color: var(--bg-color-2);
    border-radius: 2px;
    padding: 0.5rem;
    font-size: 16px;
    font-weight: 500;
  }
`
export default InputCmponent
