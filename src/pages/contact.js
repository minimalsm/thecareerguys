import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`

const SetImg = styled(Img)`
  width: 100%;
  margin-right: 20px;
`;

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <FlexContainer>
      <SetImg fluid={data.typingGatsbyImage.childImageSharp.fluid} />
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