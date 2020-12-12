import React from 'react'
import styled from 'styled-components'
import StyledLink from './StyledLink'

const OtherPagesLinkContainer = ({ firstName, firstLink, secondName, secondLink }) => (
  <StyledDiv>
    <StyledLink name={firstName} to={firstLink} />
    <StyledLink name={secondName} to={secondLink} />
  </StyledDiv>
)

export default OtherPagesLinkContainer

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  a {
    margin: 8px 5px;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`