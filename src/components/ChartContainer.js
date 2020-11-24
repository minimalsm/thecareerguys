import React from 'react'
import styled from 'styled-components'

const StyledChartContainer = styled.div`
`


export default function ChartContainer({children}) {
  return (
    <StyledChartContainer>
      {children}
    </StyledChartContainer>
  )
}
