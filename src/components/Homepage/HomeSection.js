import React from 'react'
import styled from 'styled-components'

const HomeSection = () => {
  return (
    <StyledSection>
      <h1>The Career Guys</h1>
      <p>The Career Guys was set up by Joshua Douglas as a reaction to the poor job-market created as a result of the COVID-19 pandemic. The aim is to help those who have put out of work or are experiencing dissatisfaction in their jobs and wish to transition to a new career.</p>
      <p>The Career Guys will provde you information on a wide-variety of career pathways as well as provide resources to educate yourself for these careers and funding options to fund your transistion.</p>
      <p>Good luck! <strong>We're all gonna make it!</strong></p>
    </StyledSection>
  )
}

export default HomeSection

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`