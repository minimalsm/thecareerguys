import React from 'react'
import styled from 'styled-components'

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  //Empty array to hold pageNumbers
  const pageNumbers = []

  // Gets the correct amount of page numbers based on the number of items
  // and how many items desired on each page
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  } 

  return (
    <StyledDiv>
      <ul>
        {/* 
          Map through the number of pages
          Create an li for every page number and pass it an onclock event
          The onclick event (received from props) holds the index of the first item and index of last item on that page
        */}
        {pageNumbers.map((number) => (
          <>
            {number === currentPage //This adds CSS class if the current page is currently selected
              ? <li className="current" key={number} onClick={() => {paginate(number)}}>{number}</li>
              : <li key={number} onClick={() => {paginate(number)}}>{number}</li>
            }
          </>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default Pagination

const StyledDiv = styled.div`
  margin: 25px 0;
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
      background-color: #094EC3;
      color: #fff;
    }
  }
  .current {
    background-color: #094EC3;
    color: #fff;
    font-weight: 700;
  }
`