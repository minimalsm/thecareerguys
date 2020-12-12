import React, { useState } from 'react'
import styled from 'styled-components'
import JobCard from '../Shared/JobCard'
import MoreButton from './MoreButton'

const StyledJobCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .jobcard {
    flex: 1 1 40%;
  }
`

const HomeJobCardContainer = () => {
  const [ showAll, setShowAll ] = useState(false)
  
  const handleClick = (e) => {
    e.preventDefault()
    setShowAll(true)
  }

  return (
    <StyledJobCardContainer>
      <JobCard class='jobcard' title={'Architects'} soc={2431} salary={36920} />
      <JobCard class='jobcard' title={'Graphic designers'} soc={3421} salary={22360} />
      <JobCard class='jobcard' title={'Design and development engineers'} soc={2126} salary={53040} />
      <JobCard class='jobcard' title={'Dancers and choreographers'} soc={3414} salary={0} />

      {/* If the show all button has been clicked show all 8 jobcards, else show the showmore button */}
      {showAll ?  
        (
          <>
            <JobCard class='jobcard' title={'Programmers and software development professionals'} soc={2136} salary={39520} />
            <JobCard class='jobcard' title={'Chefs'} soc={5434} salary={18200} />
            <JobCard class='jobcard' title={'Web design and development professionals'} soc={2137} salary={25480} />
            <JobCard class='jobcard' title={'Dental practitioners'} soc={2215} salary={47840} />
          </>) 
        : 
        <>
          <MoreButton name="Show more" onClick={handleClick}></MoreButton> 
        </>
      }
    </StyledJobCardContainer>
  )
}

export default HomeJobCardContainer