import React from 'react'
import styled from 'styled-components'
import StyledLink from '../StyledLink'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`

const EducationSection = () => {
  return (
    <StyledSection>
      <h2>Education</h2>
      <p>The UK has some of the best further education in the world. We've arranged the options for you to help you make the best choice for you.</p>
      <StyledLink name={'Explore Education Options'} to={'education'} />
    </StyledSection>
  )
}

export default EducationSection;