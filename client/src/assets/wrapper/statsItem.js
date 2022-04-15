import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  border-radius: 4px;
  border-bottom: 4px solid ${(props) => props.color};
  background-color: var(--bg-color-1);
  box-shadow: var(--light-shadow);
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5em 0;
    .count {
      font-size: 36px;
      font-weight: 900;
      color: ${(props) => props.color};
    }
    .icon {
      padding: 0.5em 1em;
      border-radius: 4px;
      font-weight: 900;
      color: ${(props) => props.color};
      background-color: ${(props) => props.bgColor};
    }
  }
  .title {
    text-transform: capitalize;
  }
`
export default Wrapper
