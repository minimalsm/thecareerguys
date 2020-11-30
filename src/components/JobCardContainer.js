import React, { useState } from 'react'
import styled from 'styled-components'
import ArgsJobCard from './ArgsJobCard'
import JobCard from './JobCard'
import MoreButton from './MoreButton'
import { AnimateOnChange } from 'react-animation'
import { Wobble, FadeIn, FadeOut } from 'animate-css-styled-components';


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
      <ArgsJobCard class='jobcard' title={'da'} soc={2136} salary={0} />
      <ArgsJobCard class='jobcard' title={'da'} soc={2136} salary={0} />
      <ArgsJobCard class='jobcard' title={'da'} soc={2136} salary={0} />
      <ArgsJobCard class='jobcard' title={'da'} soc={2136} salary={0} />



      {showAll ?  
        (
          <>
            <ArgsJobCard class='jobcard' title={'Lalala'} soc={2136} salary={0} />
            <ArgsJobCard class='jobcard' title={'Lalala'} soc={2136} salary={0} />
            <ArgsJobCard class='jobcard' title={'Lalala'} soc={2136} salary={0} />
            <ArgsJobCard class='jobcard' title={'Lalala'} soc={2136} salary={0} />
          </>) 
        : 
          <>
            <MoreButton name="Show more" onClick={handleClick}></MoreButton> 
          </>
      }
    </StyledJobCardContainer>
  )
}
