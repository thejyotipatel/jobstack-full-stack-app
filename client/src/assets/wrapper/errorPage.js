import styled from 'styled-components'
const Wrapper = styled.div`
  width: min(100%, 1400px);
  height: 100vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  justify-items: center;
  img {
    max-width: 500px;
    width: 100%;
  }
  h3 {
    font-size: var(--step-1);
    color: #3f3d56;
    font-weight: 400;
    text-align: center;
  }
  p {
    font-size: 16px;
    color: var(--text-color-1);
    font-weight: 400;
    text-align: center;
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 36px;
    text-transform: capitalize;
    background-color: var(--main-color-1);
    font-size: 16px;
    color: var(--bg-color-1);
    font-weight: 500;
    transition: var(--transition);
    display: flex;
    :hover {
      background-color: var(--main-color-2);
    }
  }
  svg {
    color: var(--bg-color-1);
    margin-left: 0.5rem;
    font-size: 24px;
  }
`

export default Wrapper
