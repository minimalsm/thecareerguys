import React from 'react'
import styled from 'styled-components'

// Loading is passed in props and will return a h2 until the data is ready to be displayed
// then each university will be added to a styled list and displayed
const UniversityContainer = ({ universities, loading }) => {
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

export default UniversityContainer

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
  li {
    border-bottom: 1px solid #ccc;
    width: 500px;
    a {
      display: block;
      text-decoration: none;
      transition: font-size 0.3s ease, background-color 0.3s ease;
      color: #000;
    }
    a:hover {
      font-size: 20px;
      background: #f6f6f6;
    }
    :last-child {
      border: none;
    }
  }
  /* In smaller screen sizes allow list width to shrink according to screen size */
  @media screen and (max-width: 500px) {
        li {
          width: auto;
        }
    }
`