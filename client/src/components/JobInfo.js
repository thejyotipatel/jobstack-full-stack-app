import styled from 'styled-components'

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  font-size: 16px;
  color: var(--text-color-1);
  font-weight: 500;
  text-transform: capitalize;
  margin: 0.5em 0;
  .icon {
    margin-right: 0.5em;
    color: var(--text-color-2);
  }
`
export default JobInfo
