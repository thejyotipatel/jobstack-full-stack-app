import styled from 'styled-components'

const Wrapper = styled.div`
  width: min(90%, 1000px);
  margin-inline: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  .btn-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
  }
  .btns {
    display: flex;
  }
  .prev,
  .next,
  .page-btn {
    padding: 0.5em 1em;
    margin: 0 0.5em;
    background-color: var(--main-color-1);
    color: var(--bg-color-1);
    box-shadow: var(--light-shadow);
    display: flex;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    border-radius: 4px;
    span {
      margin-right: 0.5em;
    }
    :hover {
      background-color: var(--main-color-2);
    }
  }
  .btns .active {
    background-color: var(--main-color-1);
  }
  .page-btn {
    padding: 0.6em;
    margin: 0 0.5em;
    background-color: var(--main-color-2);
    color: var(--bg-color-1);
    :hover {
      background-color: var(--main-color-1);
    }
  }
`
export default Wrapper
