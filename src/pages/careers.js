import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import JobCard from '../components/JobCard'
import Search from '../components/Search'
import PlaceholderJobs from '../components/Careers/PlaceholderJobs'

const CareersPage = () => {
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
    <Layout>
      <SEO title="Careers" />
      <h1>Popular Careers</h1>
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
    </Layout>
  )
}
export default CareersPage
