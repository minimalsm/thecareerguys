import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import * as queryString from "query-string";
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';


const JobPage = ({ location }) => {
  const ukAverageSalary = 25000
  const { soc } = queryString.parse(location.search);
  const [ jobData, setJobData ] = useState({});
  const [ payData, setPayData ] = useState([]);
  const salary = payData * 52;

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/soc/code/${soc}`)
    .then(response => response.json())
    .then(data => {
      setJobData(data)
    })
  }, [])

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}`)
    .then(response => response.json()) 
    .then(data => {
      const paySortedByYear = data.series.sort((a, b) => b.year - a.year);
      setPayData(paySortedByYear[0].estpay) //Most recent year's salary
    })
  },[])


  // const payDataSortedByYear = payData.sort((a, b) => b.year - a.year);
  // const mostRecentYearSalary = payData
  // console.log(payData * 52)
  // console.log(mostRecentYearSalary)
  // // const salary = mostRecentYearSalary.estpay
  // console.log(mostRecentYearSalary);
  
  return (
    <Layout>
      <div>
        <h1>{jobData.title}</h1>
        <h2>Description</h2>
        <p>{jobData.description}</p>
        <h2>Qualificaitons</h2>
        <p>{jobData.qualifications}</p>
        <h2>Pay</h2>
        <p>The average salary for people in this profession is £{payData * 52}. This is x% higher than the UK average. {ukAverageSalary}</p>

        <FlexContainer>
          <BarChart class="chart" name={jobData.title} salary={payData * 52}/>
          <PieChart class="chart"/>
        </FlexContainer>


      </div>
    </Layout>
    
  )
}

export default JobPage;

const FlexContainer = styled.div`
background: goldenrod;
display: flex; 
flex-direction: column; 
flex-wrap: wrap;
justify-content: center;

  .chart {
    flex: 1;
    max-width: 100%;
  }
`