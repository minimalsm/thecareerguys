import React, { useState } from 'react'
import JobCard from '../JobCard'
import Search from '../Search'
import PlaceholderJobs from './PlaceholderJobs'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`

export const CareersSection = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ results, setResults ] = useState([])

  const handleNewSearch = ({ target }) => {
    setSearchTerm(target.value)
    fetchData(target.value)
  }

  async function fetchData(value) {
    fetch(`https://api.lmiforall.org.uk/api/v1/soc/search?q=${value}`)
      .then(response => response.json())
      .then(resultData => {
        setResults(resultData)
      })
      .catch(error => console.log(error))

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
