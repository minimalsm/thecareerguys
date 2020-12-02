import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JobCard from "../components/JobCard"

const Search = ({ value, onChange }) => {
  return (
    <div>
      <span>Try searching.. </span>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const CareersPage = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ results, setResults ] = useState([])

  const handleNewSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value)
    console.log(searchTerm)
    fetchData()
  }

   async function fetchData() {
     fetch(`https://api.lmiforall.org.uk/api/v1/soc/search?q=${searchTerm}`)
       .then(response => response.json())
       .then(resultData => {
         setResults(resultData)
       })
       .catch(error => console.log(error));

   }

   const resultsFiltered = results.filter((result, idx) => idx < 10)
   const len = resultsFiltered.length;
   console.log('Results:', resultsFiltered)

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
            <JobCard title={result.title} soc={result.soc}/> 
          )
        })
      )
      : 'No results found'}


    </Layout>
  )
}
export default CareersPage
