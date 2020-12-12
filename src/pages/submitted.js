import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import MessageReceived from '../images/message-received.svg'
import Animate, { FadeIn } from 'animate-css-styled-components'
import StyledLink from '../components/Navigation/StyledLink'

const SubmittedPage = () => {
  return (
    <Layout>
      <StyledDiv>
        <h3>Message received 👍</h3>

        <StyledAnimate 
          Animation={[FadeIn]}
          duration={['2s']}
          delay={['0s']}
        >  
          <img src={MessageReceived} />
        </StyledAnimate>
        <h4>Thank you for your message</h4>
        <p>We endevour to get back to you as soon as possible!</p>
        <StyledLink to='/' name='Return to Homepage' />
      </StyledDiv>
    </Layout>
  )
}

export default SubmittedPage

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  a {
    width: 70%;
  }
`

const StyledAnimate = styled(Animate)`
  flex: 1;
  max-width: 45%;
  align-self: center;
  /* Hide illustration on smaller screensizes */
  @media only screen and (max-width: 900px) {
    max-width: 80%;
  }
`