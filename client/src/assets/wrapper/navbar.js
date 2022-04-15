import styled from 'styled-components'

const Wrapper = styled.nav`
  width: min(90%, 1000px);
  height: 50px;
  transition: var(--transition);
  margin-inline: auto;

  .navbar-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    .logo-seciton {
      max-width: 250px;
      div {
        display: flex;
      }
      h1 {
        display: none;
      }
    }
    .toggle-btn,
    .btn,
    .dropdown-btn {
      color: var(--main-color-1);
      font-weight: 400;
    }
    .toggle-btn {
      font-size: 24px;
    }
    .btn-contant {
      .btn,
      .dropdown-btn {
        color: var(--bg-color-1);
        background-color: var(--main-color-1);
        padding: 0.2em 0.5em;
        text-transform: capitalize;
        font-weight: 400;
        border-radius: 4px;
        font-size: 16px;
        box-shadow: var(--light-shadow);
        margin: 1rem 0;
        transition: var(--transition);
      }
      .show-dropdown {
        display: block;
      }
      .dropdown {
        display: none;
      }

      .dropdown-btn {
        position: absolute;
        text-align: center;
        margin-left: 1em;
        margin-top: -0.5em;
      }
      .btn {
        display: flex;
        svg {
          font-size: initial;
          font-size: 1em;
        }

        span {
          margin: 0 0.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 945px) {
    .navbar-section {
      flex-direction: row;
      .logo-seciton {
        div {
          display: none;
        }

        h1 {
          display: block;
          font-size: 24px;
          font-weight: 400;
          color: var(--main-color-1);
          text-transform: capitalize;
        }
      }
    }
  }
`
export default Wrapper
