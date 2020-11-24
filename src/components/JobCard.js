import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledJobCard = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1%;
  margin: 5px;

  .title {
    font-family: 'Raleway';
    font-weight: 600;
  }

  a {
    display: block;
    padding: 8px;
    border: 1px solid black;
    border-radius: 1px;
    width: 100%;
    margin: auto;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #448aff;
    color: #fff;
    text-align: center;

    box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
              0 2px 2px rgba(0,0,0,0.20), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
  }
`

const JobCard = () => {
  return (
    <StyledJobCard>
      <p class="title">Professional and software development professionals</p>
      <p class="salary">Average UK Salary: £45,000</p>
      <Link to='/job'>Learn More</Link>
    </StyledJobCard>
  )
}

export default JobCard
