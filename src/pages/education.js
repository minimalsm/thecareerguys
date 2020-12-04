import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import UniversitiesContainer from '../components/UniversitiesContainer'
import Pagination from '../components/Pagination'
import OtherPagesLinkContainer from '../components/OtherPagesLinkContainer'
import Animate, { FadeInUp } from 'animate-css-styled-components'
import localUniversityData from '../data/universityData.json'


const EducationPage = () => {
  const [ universities, setUniversities ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ itemsPerPage ] = useState(25)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      fetch('http://universities.hipolabs.com/search?country=United%20Kingdom')
        .then(response => response.json())
        .then(data => {
          setUniversities(data)
          setLoading(false)
        })
        .catch(() => {
          setUniversities(localUniversityData)
          setLoading(false)
        })
    }

    fetchData()
    console.log(universities)
  }, [])


  // Pagination //
  // Get current universities
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = universities.slice(indexOfFirstItem, indexOfLastItem)
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
   
  
  return (
    <Layout>
      <SEO title="Education" />
      <h1>Education</h1>
      <p>The UK has some of the best further education in the world. Below we have listed all of the available choices.</p>
      <Animate 
        Animation={[FadeInUp]} 
        duration="0.8s" 
        delay="0s">
        <UniversitiesContainer universities={currentItems} loading={loading} />
      </Animate>
      <Pagination itemsPerPage={itemsPerPage} totalItems={universities.length} paginate={paginate} currentPage={currentPage}/>
      <OtherPagesLinkContainer
        firstName={'Explore Careers'}
        firstLink={'careers'}
        secondName={'Explore Funding Options'}
        secondLink={'funding'}
      />
    </Layout>
  )
}

export default EducationPage
