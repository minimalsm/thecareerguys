import React from 'react'
import BarChart from '../components/BarChart'
import Layout from '../components/layout'
import ChartContainer from '../components/ChartContainer'

const TestPage = () => {
  
  return (
    <Layout>
      <ChartContainer>
        <BarChart />
        <BarChart />
      </ChartContainer>
    </Layout>
  )
}
export default TestPage