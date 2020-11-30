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
      <ArgsJobCard class='jobcard' title={'Design and development engineers'} soc={2126} salary={0} />
      <ArgsJobCard class='jobcard' title={'Architects'} soc={2431} salary={0} />
      <ArgsJobCard class='jobcard' title={'Graphic designers'} soc={3421} salary={0} />
      <ArgsJobCard class='jobcard' title={'Dancers and choreographers'} soc={3414} salary={0} />



      {showAll ?  
        (
          <>
            <ArgsJobCard class='jobcard' title={'Programmers and software development professionals'} soc={2136} salary={0} />
            <ArgsJobCard class='jobcard' title={'Chefs'} soc={5434} salary={0} />
            <ArgsJobCard class='jobcard' title={'Web design and development professionals'} soc={2137} salary={0} />
            <ArgsJobCard class='jobcard' title={'Dental practitioners'} soc={2215} salary={0} />
          </>) 
        : 
          <>
            <MoreButton name="Show more" onClick={handleClick}></MoreButton> 
          </>
      }
    </StyledJobCardContainer>
  )
}
