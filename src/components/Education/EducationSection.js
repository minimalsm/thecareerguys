import React, { useState, useEffect } from 'react'
import UniversitiesContainer from './UniversitiesContainer'
import OtherPagesLinkContainer from '../Navigation/OtherPagesLinkContainer'
import Pagination from '../Navigation/Pagination'
import styled from 'styled-components'
import Animate, { FadeInUp } from 'animate-css-styled-components'
import localUniversityData from '../../data/universityData.json'

const EducationSection = () => {
  const [ universities, setUniversities ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ itemsPerPage ] = useState(50)

  //Whilst waiting on the data returning from the request set loading to true
  //If the response is successful set data and change loading back to false
  //The catch sets the data to a localCopy of the data because when the site is deployed
  //It cannot access the API link due to it not being secure
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
  }, [])

  // Pagination //
  const indexOfLastItem = currentPage * itemsPerPage //The index in the universities array of the last item to be displayed on that 'page'
  const indexOfFirstItem = indexOfLastItem - itemsPerPage //The index in the universities array of the first item to be displayed on that 'page'
  const currentItems = universities.slice(indexOfFirstItem, indexOfLastItem) //An array containing only items to be displayed on the current 'page'
  //Change page
  //Takes in the pageNumber and updates the state accordingly (causing a refresh)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <StyledSection>
      <h1>Education</h1>
      <p>The UK has some of the best further education in the world. Below we have listed all of the available choices.</p>

      <Animate 
        Animation={[FadeInUp]} 
        duration="0.8s" 
        delay="0s"
      >
        <UniversitiesContainer universities={currentItems} loading={loading} />
      </Animate>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={universities.length} 
        paginate={paginate} 
        currentPage={currentPage}
      />
      <OtherPagesLinkContainer
        firstName={'Explore Careers'}
        firstLink={'careers'}
        secondName={'Explore Funding Options'}
        secondLink={'funding'}
      />
    </StyledSection>
  )
}

export default EducationSection

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`