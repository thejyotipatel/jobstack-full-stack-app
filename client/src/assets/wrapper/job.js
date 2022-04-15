import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--bg-color-1);
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  :hover {
    box-shadow: var(--dark-shadow);
  }
  hr {
    margin: 0.2em;
    opacity: 0.4;
  }
  header {
    display: flex;
    justify-content: start;
    .main-icon {
      margin-right: 0.8em;
      padding: 0.5em 1em;
      border-radius: 4px;
      color: #fff;
      width: min(95%, 55px);
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      background-color: var(--main-color-1);
    }
    .info {
      h5 {
        font-size: 0.9em;
        font-weight: 400;
        text-transform: capitalize;
        color: var(--text-color-1);
      }
      h5:last-child {
        font-size: 0.6em;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--text-color-2);
      }
    }
  }
  .content {
    .contant-center {
      display: grid;
      grid-template-columns: auto auto;
      flex-wrap: wrap;
      .status {
        padding: 0.2em 0.5em;
        border-radius: 4px;
        background-color: var(--dark-green);
        color: var(--bg-color-1);
        width: fit-content;
        font-size: 16px;
        font-weight: 500;
        margin: 0.2em 0;
        text-transform: capitalize;
      }

      .interview {
        background-color: #0004ff33;
        color: #0003b3;
      }
      .pending {
        background-color: #ffd00033;
        color: #cca700;
      }
      .declined {
        background-color: #ff510033;
        color: #cc4100;
      }
    }

    footer {
      .actions {
        a,
        .btn {
          padding: 0.5em;
          font-size: 16px;
          font-weight: 600;
          color: var(--dark-green);
          text-decoration: none;
          border-radius: 4px;
          text-transform: capitalize;
          background-color: var(--light-green);
          box-shadow: var(--light-shadow);
        }
        .btn {
          opacity: 1;
          color: var(--dark-red);
          background-color: var(--light-red);
          box-shadow: var(--light-shadow);
          margin: 0 0.5em;
        }
      }
    }
  }
`
export default Wrapper
