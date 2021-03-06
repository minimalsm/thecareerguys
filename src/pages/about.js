import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import AboutSection from '../components/About/AboutSection'


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About Us" />
    <AboutSection data={data} />  {/* Data is passed in from the graphql query which fetches the images used */}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    joshuaGatsbyImage: file(relativePath: {eq: "joshua-douglas.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dieterGatsbyImage: file(relativePath: {eq: "dieter-rams-2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sennaGatsbyImage: file(relativePath: {eq: "senna.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`