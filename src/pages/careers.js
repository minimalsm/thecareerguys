import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

  const handleNewSearch = (e) => {
    setSearchTerm(e.target.value)
    fetchData()
  }

   // Client-side Runtime Data Fetching
   async function fetchData() {
     // get data from GitHub api
     fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${searchTerm}`)
       .then(response => response.json()) // parse JSON from request
       .then(resultData => {
         console.log(resultData[1])
       }) // set data for the number of stars
   }

  return (
    <Layout>
      <SEO title="Careers" />
      <h1>Popular Careers</h1>
      <Search 
        value={searchTerm}
        onChange={handleNewSearch}
      />
    </Layout>
  )
}
export default CareersPage
