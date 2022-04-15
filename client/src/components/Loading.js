import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
      <div className='loading-center'>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(100%, 150px);
  margin-inline: auto;
  margin-top: 2rem;
  .loading-center {
    height: 15px;
    width: 105px;
    display: flex;
    position: relative;
    text-align: center;
  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--main-color-1);
    animation: move 500ms linear 0ms infinite;
    margin-right: 30px;

    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
      animation: grow 500ms linear 0ms infinite;
    }

    &:last-child {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 0;
      animation: grow 500ms linear 0s infinite reverse;
    }
  }

  @keyframes grow {
    from {
      transform: scale(0, 0);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes move {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(45px);
    }
  }
`

export default Loading
