import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.span`
  /* display: block; */
  margin: auto;
  width: 45%;
  padding: 12px 8px;
  border: 1px solid #094EC3;
  border-right-width: 4px;
  border-bottom-width: 4px;
  border-radius: 1px;

  font-family: 'Raleway';
  font-weight: 700;
  text-decoration: none;
  background-color: #fff;
  color: #094EC3;
  text-align: center;

  :hover {
    color: #fff;
    background: #094EC3;
    border-color: black;
  }
`

export default function MoreButton(props) {
  return (
    <StyledLink onClick={props.onClick}>
      {props.name}
    </StyledLink>
  )
}
