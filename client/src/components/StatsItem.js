import Wrapper from '../assets/wrapper/statsItem'

const StatsItem = ({ count, title, icon, color, bgColor }) => {
  return (
    <Wrapper color={color} bgColor={bgColor}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}

export default StatsItem
