import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import GoogleMap from './GoogleMap'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .contact-link {
    display: block;
    padding: 8px;
    border: 1px solid black;
    border-radius: 1px;
    border-right-width: 4px;
    border-bottom-width: 4px;
    width: 100%;
    margin-top: 5px;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #094EC3;
    color: #fff;
    text-align: center;


    :hover {
      background-color: #0A5FCF;
    }
  }  
  
`



const FindUsHere = () => {
  return (
    <StyledDiv>
      <h3>Find Us Here</h3>
        
      <GoogleMap />

      <small>123 Fake St</small>
      <small>Glasgow</small>
      <small>G12 3AB</small>

      <Link class='contact-link' to='/contact'>Want to Talk? Get in touch.</Link>
    </StyledDiv>
  )
}

export default FindUsHere;