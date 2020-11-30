import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
`

const University = ({ universities, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
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

export default University;
