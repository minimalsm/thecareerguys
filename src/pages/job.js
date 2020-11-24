import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import * as queryString from "query-string";

const JobPage = ({ location }) => {
  const ukAverageSalary = 25000
  const { soc } = queryString.parse(location.search);
  const [ jobData, setJobData ] = useState({});
  const [ payData, setPayData ] = useState([]);

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
      
      </div>
    </Layout>
    
  )
}

export default JobPage;