import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import * as queryString from "query-string";
import PaySection from '../components/Job/PaySection';


const JobPage = ({ location }) => {
  const ukAverageSalary = 25000
  const { soc } = queryString.parse(location.search);
  const [ jobData, setJobData ] = useState({});
  const [ scotlandSalary, setScotlandSalary ] = useState([]);

  const getMostRecentSalary = (data) => {
    const payDataByYear = data.series.sort((a, b) => b.year - a.year);
    const mostRecentWeeklyWage = payDataByYear[0].estpay;
    const mostRecentSalary = mostRecentWeeklyWage * 52;
    return mostRecentSalary;
  }

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/soc/code/${soc}`)
    .then(response => response.json())
    .then(data => setJobData(data))
  }, [])

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}&filters=region%3A11`)
    .then(response => response.json()) 
    .then(data => setScotlandSalary(getMostRecentSalary(data)))
    .catch(error => console.log('We are unable to find any salary data for this job.'))
  },[])
  
  return (
    <Layout>
      <div>
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

      </div>
    </Layout>
    
  )
}

export default JobPage;

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