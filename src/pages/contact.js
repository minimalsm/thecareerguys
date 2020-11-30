import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import styled from 'styled-components'
import TypingMan from '../images/man-typing.svg'
import Animate, {
  Flash,
  Bounce,
  FadeOut,
  FadeIn,
  RotateInDownLeft
} from 'animate-css-styled-components';
import RollIn from "animate-css-styled-components/lib/Especials/RollIn"
import Tada from "animate-css-styled-components/lib/Attention/Tada"
import Jello from "animate-css-styled-components/lib/Attention/Jello"

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  /* align-items: center; */
`

const StyledAnimate = styled(Animate)`
  flex: 1 1 auto;
  align-self: center;
  margin-right: 30px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const StyledImg = styled.img`
  width: 100%;
  margin-right: 20px;
`;
// <SetImg fluid={data.typingGatsbyImage.childImageSharp.fluid} />

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <FlexContainer>
    
      <StyledAnimate 
        Animation={[RotateInDownLeft, Bounce, Jello]}
        duration={["3s", "3s", "15s"]}
        delay={["1s", "0s", "1s"]}
      >
        <StyledImg src={TypingMan} />
      </StyledAnimate>

      <ContactForm />
    </FlexContainer>
  </Layout>
)

export default ContactPage;

export const query = graphql`
  query {
    typingGatsbyImage: file(relativePath: {eq: "typing-macbook.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`