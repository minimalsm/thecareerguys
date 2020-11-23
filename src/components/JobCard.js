import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledJobCard = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 1%;

  .title {
    font-family: 'Raleway';
    font-weight: 600;
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
