import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const SubmittedPage = () => {
  return (
    <Layout>
      <StyledDiv>
        <h3>Thank you for your message</h3>
        <p>We aim to get back to you soon!</p>
      </StyledDiv>
    </Layout>
  )
}

export default SubmittedPage