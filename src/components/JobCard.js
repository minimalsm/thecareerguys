import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FadeIn } from 'animate-css-styled-components';

const StyledFadeIn = styled(FadeIn)`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 45%;

  margin: 5px auto;

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }
`

const StyledJobCard = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  flex-wrap: wrap;

  .title {
    font-family: 'Raleway';
    font-weight: 600;
  }

  a {
    display: block;
    padding: 8px;
    border: 1px solid black;
    border-right-width: 4px;
    border-bottom-width: 4px;
    border-radius: 1px;
    width: 100%;
    margin: auto;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #094EC3;
    color: #fff;
    text-align: center;

    :hover {
      background: #0A5FCF;
    }
  }
`

const JobCard = ({ soc, title }) => {
  return (
    <StyledFadeIn duration="0.8s" delay="0s">
      <StyledJobCard>
        <p class="title">{title}</p>
        <p class="salary">Average UK Salary: £45,000</p>
        <Link to={`/job?soc=${soc}`}>Learn More</Link>
      </StyledJobCard>
    </StyledFadeIn>
  )
}

export default JobCard
