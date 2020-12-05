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
  max-width: 100%;

  /* Overides default margins (26px) as it was asthethically clunky on the Funding page */
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
    max-width: 100%;
    flex: 1;
  }

  a {
    display: inline-block;
    max-width: 80%
  }


  /* Content will try to take up 80% of screen size minimum and will grow/shrink accordingly */
  .content {
    flex: 1 1 80%;
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
      .content {
        flex-basis: auto;
        
      }
  }

  @media screen and (max-width: 400px) {
      p {
        font-size: 15px;
      }
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
