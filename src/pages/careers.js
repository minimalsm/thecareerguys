import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArgsJobCard from "../components/ArgsJobCard"

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

   // Client-side Runtime Data Fetching
   async function fetchData() {
     // get data from GitHub api
     fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${searchTerm}`)
       .then(response => response.json()) // parse JSON from request
       .then(resultData => {
         setResults(resultData)
       }) // set data for the number of stars
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
            <ArgsJobCard title={result.title} soc={result.soc}/> 
          )
        })
      )
      : 'No results found'}


    </Layout>
  )
}
export default CareersPage
