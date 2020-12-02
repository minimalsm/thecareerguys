import React from 'react'
import styled from 'styled-components'
import BarChart from '../BarChart'
import PieChart from '../PieChart'

const FlexContainer = styled.div`
display: flex; 
flex-direction: column; 
flex-wrap: wrap;
justify-content: center;

  .chart {
    flex: 1;
    max-width: 100%;
  }
`

const PaySection = ({ name, soc, scotlandSalary}) => {
  const ukAverageSalary = 25000

  //If the API has no pay data for this Career
  if (scotlandSalary === 0) {
    return <div>
      <h2>Pay</h2>
      <p>Sorry <span>😢</span> We do not appear to have any data on salary information for this type of job at this time.</p>
      <p>We are working hard on this problem and hope to resolve it soon. ❤</p>
    </div>
  }


  return (
    <div>
      <h2>Pay</h2>
      <p>The average salary for people in this profession is £{scotlandSalary}. This is x% higher than the UK average. {ukAverageSalary}</p>

      <FlexContainer>
        <BarChart class="chart" name={name} salary={scotlandSalary}/>
        <PieChart class="chart" name={name} soc={soc} scotlandSalary={scotlandSalary} />
      </FlexContainer>
    </div>
  )
}

export default PaySection