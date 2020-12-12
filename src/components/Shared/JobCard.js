import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FadeIn } from 'animate-css-styled-components'

const JobCard = ({ soc, title, salary }) => {
  const [ jobSalary, setJobSalary ] = useState(0)
  
  const getMostRecentSalary = (data) => {
    const payDataByYear = data.series.sort((a, b) => b.year - a.year)
    const mostRecentWeeklyWage = payDataByYear[0].estpay
    const mostRecentSalary = mostRecentWeeklyWage * 52
    return mostRecentSalary
  }

  // Only run a fetch request if the salary hasn't been passed to 
  // the JobCard as props - (saving fetch requests for salary on placeholder jobcards)
  useEffect(() => {
    if (!salary) {
      fetch(`https://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}&filters=region%3A11`)
        .then(response => response.json()) 
        .then(data => setJobSalary(getMostRecentSalary(data)))
        .catch((error) => console.log(error))
    } else {
      setJobSalary(salary)
    }
  }, [])
  
  return (
    <StyledFadeIn duration="0.8s" delay="0s">
      <StyledJobCard>
        <h3 className="title">{title}</h3>
        { jobSalary === 0 ?
          <p>No salary information available</p> :
          <p className="salary">Average UK Salary: £{salary || jobSalary}</p>
        }
        <Link to={`/job?soc=${soc}`}>Learn More</Link>
      </StyledJobCard>
    </StyledFadeIn>
  )
}

export default JobCard

const StyledFadeIn = styled(FadeIn)`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 45%;
  margin: 5px auto;
  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }
`

const StyledJobCard = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 30px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  flex-wrap: wrap;
  .title {
    font-family: 'Raleway';
    font-weight: 600;
  }
  h3 {
    margin-bottom: 10px;
  }
  a {
    display: block;
    padding: 8px;
    border: 1px solid black;
    border-right-width: 4px;
    border-bottom-width: 4px;
    border-radius: 1px;
    width: 100%;
    margin: auto;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #094EC3;
    color: #fff;
    text-align: center;
    :hover {
      background: #0A5FCF;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 18px;
  }
`