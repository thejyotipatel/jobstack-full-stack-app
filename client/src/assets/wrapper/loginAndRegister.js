import styled from 'styled-components'

const Wrapper = styled.main`
  box-shadow: var(--light-shadow);
  background-color: var(--bg-color-1);
  margin-inline: auto;
  width: min(95%, 400px);
  margin-top: 2rem;
  border-radius: 4px;
  padding-top: 1rem;

  .form-controls {
    padding: 1rem;
  }
  .form-controls h1 {
    text-align: center;
    color: var(--text-color-2);
    font-weight: 400;
    font-size: 36px;
    text-transform: capitalize;
  }
  .btn {
    padding: 0.5rem 1rem;
    background-color: var(--main-color-1);
    border-radius: 4px;
    color: var(--bg-color-1);
    width: min(95%, 400px);
    height: fit-content;
    margin: 1rem auto;
    display: grid;
    place-content: center;
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
  }
  .toggle-contant {
    font-size: 16px;
    line-height: var(--line-height-p);
    font-weight: 500;
    text-align: center;
  }
  .btn-toggle {
    color: var(--main-color-1);
    font-size: 16px;
    margin: 0.2rem;
    font-weight: 600;
  }
`
export default Wrapper
