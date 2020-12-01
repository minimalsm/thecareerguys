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
    width: 100%;
    margin-top: 5px;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #448aff;
    color: #fff;
    text-align: center;

    box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
              0 2px 2px rgba(0,0,0,0.20), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
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