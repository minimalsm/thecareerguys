import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const SetImg = styled(Image)`
  margin: auto;
  flex: 1 1 150px;
  margin-right: 20px; /* Spacing between logo and content */

  /* Hides funding option logos on screens under 600px for maximum image legibility */
  @media screen and (max-width: 600px) {
      display: none;
  }
`

const StyledDiv = styled.div`
  display: flex;
  padding-bottom: 50px;

  /* Overides default margins (26px) as it was asthethically clunky on the Funding page */
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
  }


  /* Content will try to take up 80% of screen size minimum and will grow/shrink accordingly */
  .content {
    flex: 1 1 80%;
  }
`

const FundingOption = ({ name, content, link, image }) => {
  return (
    <StyledDiv>
      <SetImg fluid={image} />
      <div className='content'>
        <h2>{name}</h2>
        <p>{content}</p>
        <a href={link}>{link}</a>
      </div>
    </StyledDiv>
  )
}

export default FundingOption
