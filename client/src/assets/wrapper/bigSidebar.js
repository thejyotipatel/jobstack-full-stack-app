import styled from 'styled-components'

const Wrapper = styled.aside`
  display: ${(props) => props.theme};
  transition: var(--transition);
  width: min(80%, 600px);
  margin-inline: auto;

  .logo {
    margin: 2.5rem 0;
  }
  .active span {
    color: var(--main-color-1);
  }
  .active i {
    color: var(--main-color-1);
  }
  .link:hover {
    color: var(--main-color-1);
    margin-left: 0.5rem;
  }
  .link {
    width: fit-content;
    color: var(--main-color-2);
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.3rem;
    transition: var(--transition);
    display: flex;
    padding: 0.5rem 1rem;
  }
  a {
    margin: 1rem 0rem;
    color: var(--main-color-1);
  }
  span {
    padding-left: 0.2rem;
  }
  @media screen and (max-width: 945px) {
    display: none;
  }
`
export default Wrapper
