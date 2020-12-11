import React from 'react'
import styled from 'styled-components'
import JobCardContainer from './HomeJobCardContainer'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 20px;
  padding-bottom: 25px;
`

const EducationSection = () => {
  return (
    <StyledSection>
      <h2>Popular Careers</h2>
      <JobCardContainer />
    </StyledSection>
  )
}

export default EducationSection