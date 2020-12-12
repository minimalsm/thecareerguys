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
  background: #bdbdbd;
  border-radius: 10px;
`
