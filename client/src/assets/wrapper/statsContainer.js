import styled from 'styled-components'

const Wrapper = styled.div`
  width: min(90%, 1000px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export default Wrapper
