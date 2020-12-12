import React from 'react'
import styled from 'styled-components'
import BarChart from '../Charts/BarChart'
import PieChart from '../Charts/PieChart'

const PaySection = ({ name, soc, scotlandSalary}) => {
  const scotlandAverageSalary = 25000 //From gov.scot report

  //If the API has no pay data for this Career
  if (scotlandSalary === 0) {
    return <div>
      <h2>Pay</h2>
      <p>Sorry <span>😢</span> We do not appear to have any data on salary information for this type of job at this time.</p>
      <p>We are working hard on this problem and hope to resolve it soon. ❤</p>
    </div>
  }

  //Returns a string depending on if the salary is more or less than the scotlandAverageSalary
  const salaryPercentCalculate = (scotlandSalary, scotlandAverageSalary) => {
    if (scotlandSalary > scotlandAverageSalary) {
      const increase = scotlandSalary - scotlandAverageSalary
      const increasePercent = Math.floor((increase / scotlandAverageSalary) * 100)
      const increaseString = `This is ${increasePercent}% more than the Scottish average of £${scotlandAverageSalary}.`
      return increaseString
    } else {
      const decrease = scotlandAverageSalary - scotlandSalary
      const decreasePercent = Math.floor((decrease / scotlandSalary) * 100)
      const decreaseString = `This is ${decreasePercent}% less than the Scottish average of £${scotlandAverageSalary}.`
      return decreaseString
    }
  }

  return (
    <div>
      <h2>Pay</h2>
      <p>The average salary for people in this profession is £{scotlandSalary}. {salaryPercentCalculate(scotlandSalary, scotlandAverageSalary)}</p>

      <FlexContainer>
        <BarChart class="chart" name={name} salary={scotlandSalary}/>
        <PieChart class="chart" name={name} soc={soc} scotlandSalary={scotlandSalary} />
      </FlexContainer>
    </div>
  )
}

export default PaySection

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