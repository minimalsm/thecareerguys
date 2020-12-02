import React from 'react'
import styled from 'styled-components'
// Components
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'
// Images/animation
import TypingMan from '../images/man-typing.svg'
import Animate, { Bounce, Jello, RotateInDownLeft } from 'animate-css-styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
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

const StyledImg = styled.img`
  width: 100%;
  margin-right: 20px;
`

const ContactPage = () => (
  <Layout>
    <FlexContainer>
    
      <StyledAnimate 
        Animation={[RotateInDownLeft, Bounce, Jello]}
        duration={['3s', '3s', '15s']}
        delay={['1s', '0s', '1s']}
      >        <StyledImg src={TypingMan} />
      </StyledAnimate>

      <ContactForm />

    </FlexContainer>
  </Layout>
)

export default ContactPage