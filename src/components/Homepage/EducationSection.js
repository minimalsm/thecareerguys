import React from 'react'
import styled from 'styled-components'
import StyledLink from '../Navigation/StyledLink'

const StyledSection = styled.section`
  margin: 20px auto 0px auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`

const EducationSection = () => {
  return (
    <StyledSection>
      <h2>Education</h2>
      <p>The UK has some of the best further education in the world. We`&apos;`ve arranged the options for you to help you make the best choice for you.</p>
      <StyledLink name={'Explore Education Options'} to={'education'} />
    </StyledSection>
  )
}

export default EducationSection