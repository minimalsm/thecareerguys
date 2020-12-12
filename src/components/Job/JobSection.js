import React, { useState, useEffect } from 'react'
import PaySection from './PaySection'
import styled from 'styled-components'

const JobSection = ({ soc }) => {
  const [ jobData, setJobData ] = useState({})
  const [ scotlandSalary, setScotlandSalary ] = useState([])

  // Data has to be processed before displaying as the API has data in seemingly random order
  const getMostRecentSalary = (data) => {
    const payDataByYear = data.series.sort((a, b) => b.year - a.year)
    const mostRecentWeeklyWage = payDataByYear[0].estpay
    const mostRecentSalary = mostRecentWeeklyWage * 52
    return mostRecentSalary
  }

  // Fetching the data for the specific code
  useEffect(() => {
    fetch(`https://api.lmiforall.org.uk/api/v1/soc/code/${soc}`)
      .then(response => response.json())
      .then(data => setJobData(data))
      .catch(error => console.log(error))
  }, [])

  //Fetching the scotland average pay for this job
  useEffect(() => {
    fetch(`https://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}&filters=region%3A11`)
      .then(response => response.json()) 
      .then(data => setScotlandSalary(getMostRecentSalary(data)))
      .catch(error => console.log(error))
  }, [])

  return (
    <StyledDiv>
      <h1>{jobData.title}</h1>
      <h2>Description</h2>
      <p>{jobData.description}</p>
      <h2>Qualificaitons</h2>
      <p>{jobData.qualifications}</p>
        
      <PaySection
        name={jobData.title}
        soc={soc}
        scotlandSalary={scotlandSalary}
      />
    </StyledDiv> 
  )
}

export default JobSection

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`