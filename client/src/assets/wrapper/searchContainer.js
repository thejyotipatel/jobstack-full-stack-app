import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: var(--bg-color-1);
  box-shadow: var(--light-shadow);
  padding: 1rem;
  width: min(90%, 1000px);
  margin-inline: auto;
  h1 {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 400;
    margin: 1rem 0.5rem;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
  }
  .input-controls {
    margin: auto;
    width: 100%;
  }
  button {
    margin: 2.5rem 0.8em 0.5rem;
    padding: 0.5em 2em;
    color: var(--bg-color-1);
    background-color: var(--main-color-1);
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    width: fit-content;
    height: fit-content;
    border-radius: 4px;
    :hover {
      background-color: var(--main-color-2);
    }
  }
  @media screen and (min-width: 550px) {
    .input-controls {
      grid-template-columns: auto auto auto;
      display: grid;
    }
  }
`

export default Wrapper
