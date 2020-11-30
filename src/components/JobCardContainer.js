import React, { useState } from 'react'
import styled from 'styled-components'
import ArgsJobCard from './ArgsJobCard'
import JobCard from './JobCard'
import MoreButton from './MoreButton'

const StyledJobCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .jobcard {
    flex: 1 1 40%;
  }
`


export default function JobCardContainer() {
  const [ showAll, setShowAll ] = useState(false)
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    setShowAll(true);
  }

  return (
    <StyledJobCardContainer>
      <ArgsJobCard class='jobcard' title={'Lalala'} />
      <ArgsJobCard class='jobcard' title={'Lalala'} />

      <JobCard class='jobcard' />
      <JobCard class='jobcard' />

      {showAll ?  
        (<>
            <JobCard class='jobcard' /> 
            <JobCard class='jobcard' /> 
            <JobCard class='jobcard' /> 
            <JobCard class='jobcard' /> 
          </>) 
        : 
          <>
            <MoreButton name="Show more" onClick={handleClick}></MoreButton> 
          </>
      }
    </StyledJobCardContainer>
  )
}
