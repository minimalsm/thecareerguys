import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    flex: 1 1 50%;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <FlexContainer>
      <div class="image">there isn't really anything here here isn't really anything herehere isn't really anything herehere isn't really anything herehere isn't really anything herehere isn't really anything herehere isn't really anything herehere isn't really anything here</div>
      <ContactForm />
    </FlexContainer>
  </Layout>
)

export default ContactPage
