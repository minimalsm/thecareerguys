import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UniversitiesContainer from "../components/UniversitiesContainer";
import Pagination from "../components/Pagination";

const EducationPage = () => {
  const [ universities, setUniversities ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ itemsPerPage, setItemsPerPage ] = useState(25);

   useEffect(() => {
    async function fetchData() {
      // get data from GitHub api
      setLoading(true)
      fetch(`http://universities.hipolabs.com/search?country=United%20Kingdom`)
        .then(response => response.json()) // parse JSON from request
        .then(data => {
          setUniversities(data);
          setLoading(false);
        }) // set data for the number of stars
    }

    fetchData();
    console.log(universities);
   }, [])


   // Pagination //
   // Get current universities
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = universities.slice(indexOfFirstItem, indexOfLastItem);

   //Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber)
   
  
  return (
    <Layout>
      <SEO title="Education" />
      <h1>Education</h1>
      <p>The UK has some of the best further education in the world. Below we have listed all of the available choices.</p>
      <UniversitiesContainer universities={currentItems} loading={loading} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={universities.length} paginate={paginate} currentPage={currentPage}/>
    </Layout>
  )
}

export default EducationPage
