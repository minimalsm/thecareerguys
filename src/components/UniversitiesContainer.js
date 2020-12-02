import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  margin: auto;

  li {
    border-bottom: 1px solid #ccc;
    width: 500px;
  }

  li a {
    text-decoration: none;
    color: #000;

    transition: font-size 0.3s ease, background-color 0.3s ease;
    display: block;
  }

  li a:hover {
    font-size: 20px;
    background: #f6f6f6;
  }

  li:last-child {
    border: none;
  }

@media screen and (max-width: 500px) {
      li a {
        width: auto;
      }
  }
`



const University = ({ universities, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  
  
  return (
    <StyledList>
      {universities.map(university => (
        <li key={university.name}>
          <a href={university.web_pages[0]}>{university.name}</a>
        </li>
        
      ))}
    </StyledList>
  )
}

export default University
