import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.span`
  display: block;
  margin: auto;
  width: 10vw;
  padding: 12px 8px;
  border: 1px solid #448aff;
  border-radius: 1px;

  font-family: 'Raleway';
  font-weight: 700;
  text-decoration: none;
  background-color: #fff;
  color: #448aff;
  text-align: center;

  box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
            0 2px 2px rgba(0,0,0,0.20), 
            0 4px 4px rgba(0,0,0,0.15), 
            0 8px 8px rgba(0,0,0,0.10),
            0 16px 16px rgba(0,0,0,0.05);
`

export default function MoreButton(props) {
  return (
    <StyledLink onClick={props.onClick}>
      {props.name}
    </StyledLink>
  )
}
