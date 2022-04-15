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

  /* buttons */
  .btn-control {
    display: flex;
  }
  .submit-btn,
  .clear-btn {
    padding: 0.5em 1.5em;
    color: var(--bg-color-1);
    background-color: var(--main-color-1);
    font-size: 18px;
    font-weight: 500;
    border-radius: 4px;
    text-transform: capitalize;
    width: inherit;
    margin: 0.5rem;
    transition: var(--transition);
  }
  .submit-btn:hover {
    background-color: var(--hover-color);
  }

  .clear-btn {
    padding: 0;
    background-color: transparent;
    color: var(--main-color-2);
    :hover {
      color: var(--hover-color);
    }
  }

  @media screen and (min-width: 700px) {
    .input-controls {
      grid-template-columns: auto auto;
      display: grid;
    }
  }
`
export default Wrapper
