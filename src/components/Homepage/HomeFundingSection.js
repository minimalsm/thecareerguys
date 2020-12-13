/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import StyledLink from '../Navigation/StyledLink'


const HomeFundingSection = () => {
  return (
    <StyledSection>
      <h2>Funding</h2>
      <p>Don't let money worries be the reason you don't make the switch to a new career. Check out our resources for all the different ways of funding your new career!</p>
      <StyledLink name={'Explore Funding Options'} to={'funding'} />
    </StyledSection>
  )
}

export default HomeFundingSection

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;

  @media only screen and (min-width: 800px) {
    a {
      width: 500px;
    }
  }
`