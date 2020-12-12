import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import FundingSection from '../components/Funding/FundingSection'

const FundingPage = ({ data }) => (
  <Layout>
    <SEO title="Funding Options" />
    <FundingSection data={data} />
  </Layout>
)

export default FundingPage

export const query = graphql`
  query {
    govUkGatsbyImage: file(relativePath: {eq: "gov-uk.png"}) {
      childImageSharp {
        fluid(maxWidth: 5500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scholarshipHubGatsbyImage: file(relativePath: {eq: "the-scholarship-hub.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    turn2UsGatsbyImage: file(relativePath: {eq: "turn-2-us.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`