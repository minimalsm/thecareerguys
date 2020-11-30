import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-top: 25px;

  ul {
    list-style: none;
    margin: auto;
  }

  li {
    display: inline-block;
    border: 1px solid #bdbdbd;
    border-radius: 2.5px;
    padding: 3px 9px;
    margin: 0;
    margin-right: 6px;

    :hover {
      cursor: pointer;
      background-color: #448aff;
    }
  }

  .current {
    background-color: #448aff;
    font-weight: 700;
  }
`

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  // Gets the correct amount of page numbers based on the number of items
  // and how many items desired on each page
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  } 


  return (
    <StyledDiv>
      <ul>
        {pageNumbers.map((number) => (
          <>
            {number == currentPage 
              ? <li class="current" key={number} onClick={() => {paginate(number)}}>{number}</li>
              : <li key={number} onClick={() => {paginate(number)}}>{number}</li>
          }
          </>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default Pagination
