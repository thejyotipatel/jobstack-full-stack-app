import styled from 'styled-components'

const Wrapper = styled.div`
  width: min(90%, 1000px);
  margin-inline: auto;
  .total-jobs {
    font-size: 24px;
    font-weight: 400;
    margin: 1em 0;
    text-transform: capitalize;
  }

  .jobs-contaner {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5em;
  }
  @media screen and (max-width: 650px) {
    .jobs-contaner {
      grid-template-columns: auto;
    }
  }
`

export default Wrapper
