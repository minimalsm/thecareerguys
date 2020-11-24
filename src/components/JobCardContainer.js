import React from 'react'
import styled from 'styled-components'
import JobCard from './JobCard'

const StyledJobCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .jobcard {
    flex: 1 1 40%;
  }
`

export default function JobCardContainer() {
  return (
    <StyledJobCardContainer>
      <JobCard class='jobcard' />
      <JobCard class='jobcard' />
      <JobCard class='jobcard' />
      <JobCard class='jobcard' />
    </StyledJobCardContainer>
  )
}
