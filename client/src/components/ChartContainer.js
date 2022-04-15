import BarChartComp from './BarChart'
import AreaChartComp from './AreaChart'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'
import { useState } from 'react'

const ChartContainer = () => {
  const { monthlyApplications: data } = useAppContext()
  const [barChart, setBarChart] = useState(true)

  return (
    <Wrapper>
      <h4 className='monthly'>Monthly Applicationa</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'bar chart' : 'area chart'}
      </button>
      {barChart ? <AreaChartComp data={data} /> : <BarChartComp data={data} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(90%, 1000px);
  margin-inline: auto;
  text-align: center;
  h4 {
    font-weight: 400;
    text-transform: capitalize;
    margin: 1em 0;
  }
  button {
    color: var(--main-color-1);
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
    :hover {
      color: var(--main-color-2);
    }
  }
`
export default ChartContainer
