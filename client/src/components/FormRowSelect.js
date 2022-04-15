import React from 'react'
import styled from 'styled-components'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='from-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        className='form-select'
        onChange={handleChange}
        value={value}
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item} className='select-option'>
              {item}
            </option>
          )
        })}
      </select>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
  }
  .form-select {
    box-shadow: var(--box-inset-shadow);
    background-color: var(--bg-color-2);
    border-radius: 2px;
    padding: 0.5rem;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    width: 96%;
  }
`
export default FormRowSelect
