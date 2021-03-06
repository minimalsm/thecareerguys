import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContactForm from '../components/Contact/ContactForm'
import TypingMan from '../images/man-typing.svg'
import Animate, { Bounce, RotateInDownLeft } from 'animate-css-styled-components'

const ContactPage = () => (
  <Layout>
    <FlexContainer>
      {/* StyledImg component MUST be wrapped in the animate component in order to animate */}
      <StyledAnimate 
        Animation={[RotateInDownLeft, Bounce]}
        duration={['3s', '3s']}
        delay={['1s', '0s']}
      >        <StyledImg src={TypingMan} />
      </StyledAnimate>
      <ContactForm />
    </FlexContainer>
  </Layout>
)

export default ContactPage
  
const FlexContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`

const StyledImg = styled.img`
  width: 100%;
  margin-right: 20px;
`
  
const StyledAnimate = styled(Animate)`
  flex: 1 1 auto;
  align-self: center;
  margin-right: 30px;
  /* Hide illustration on smaller screensizes */
  @media only screen and (max-width: 800px) {
    display: none;
  }
`