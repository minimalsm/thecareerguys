import React, { useState } from 'react'
import styled from 'styled-components'
import JobCard from '../Shared/JobCard'
import Search from './Search'
import PlaceholderJobs from './PlaceholderJobs'

export const CareersSection = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ results, setResults ] = useState([])

  //Anytime a character is typed into the searchTerm we will rerun the search
  const handleNewSearch = ({ target }) => {
    setSearchTerm(target.value)
    fetchData(target.value)
  }

  function fetchData(value) {
    fetch(`https://api.lmiforall.org.uk/api/v1/soc/search?q=${value}`)
      .then(response => response.json())
      .then(resultData => {
        setResults(resultData)
      })
  }

  const resultsFiltered = results.filter((result, idx) => idx < 10)
  const len = resultsFiltered.length

  return (
    <StyledDiv>
      <h1>Explore Careers</h1>
      <Search 
        value={searchTerm}
        onChange={handleNewSearch}
      />
      {/* 
          If no search has been done then display Placeholder jobs
          If a search has been done and their are results for that search them render
          a jobcard for each of the results
      */}
      {resultsFiltered && len > 0 
        ? 
        (
          resultsFiltered.map((result) => {
            return (
              <JobCard key={result.soc} title={result.title} soc={result.soc}/> 
            )
          })
        )
        : <PlaceholderJobs />
      }
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`