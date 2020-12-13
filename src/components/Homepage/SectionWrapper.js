import React from 'react'
import styled from 'styled-components'

const SectionWrapper = (props) => {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

export default SectionWrapper

const StyledDiv = styled.div`
  background: #CFD8DC;
  border-radius: 10px;
`
