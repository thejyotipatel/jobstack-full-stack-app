import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const AreaChartComp = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 70, bottom: 20 }}>
        <CartesianGrid strokeDasharray='3 3 ' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='count'
          fill='var(--main-color-2)'
          stroke='var(--main-color-1)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComp
