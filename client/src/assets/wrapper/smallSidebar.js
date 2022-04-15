import styled from 'styled-components'

const Wrapper = styled.nav`
  display: ${(props) => props.theme};
  position: fixed;
  inset: 0 0 0 0;
  padding: 0 0 0 30%;
  z-index: 1000;
  transition: var(--transition);
  background-color: hsl(0 0% 0%/ 0.5);

  @supports (backdrop-filter: blur(1rem)) {
    background-color: hsl(0 0% 0%/ 0.3);
    backdrop-filter: blur(0.5rem);
  }
  .menu-toggle-btn {
    position: absolute;
    z-index: 9999;
    top: 2rem;
    right: 3rem;
    transition: var(--transition);
    color: var(--main-color-1);
    font-size: min(5vw, 2rem);
  }
  .navbar {
    background: var(--bg-color-1);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    padding: 3rem 0;
  }
  .active span {
    color: var(--main-color-1);
  }
  .active i {
    color: var(--main-color-1);
  }
  .link {
    margin: 1rem 0;
    color: var(--main-color-2);
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    transition: var(--transition);
    text-transform: capitalize;
    span {
      margin-left: 0.5rem;
      font-weight: normal;
    }
  }
  .link:hover {
    color: var(--main-color-1);
  }
  @media screen and (min-width: 945px) {
    display: none;
  }
`
export default Wrapper
