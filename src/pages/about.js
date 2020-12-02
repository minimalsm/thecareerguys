import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo"
import styled from 'styled-components'
import FindUsHere from "../components/About/FindUsHere"


const FlexTest = styled.div`
  display: flex;
  justify-content: space-around;

  .flexWrapperLeft {
    max-width: 50%;
  }

  /* .flexWrapperRight {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  } */

  @media only screen and (max-width: 950px) {
    flex-wrap: wrap;

    .flexWrapperLeft {
      max-width: 100%;
    }
  }
`

const StyledFlexContainer = styled.div`
  display: flex;
  margin: 50px 0px;
  width: 100%;


  p {
  }

  .bio {
    flex: 1 1.5 auto;
  }

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: auto;
  flex: 2 1 200px; 
  border-radius: 50%;
  margin-right: 2.5vw;

  @media only screen and (max-width: 800px) {
    max-width: 35%;
    margin: auto;
  }
`;

const AboutPage = ({ data }) => (
  <Layout>
  <FlexTest>
  <div className='flexWrapperLeft'>
    <SEO title="About Us" />
    <h1>Who We Are</h1>
    <p>Nostrud irure sunt do Lorem aliqua elit ut labore dolore velit esse cupidatat. Ex sit eiusmod tempor non eu tempor veniam occaecat laboris quis ut mollit magna ex. Reprehenderit ad consectetur anim id deserunt dolore ipsum aliquip amet. Eiusmod mollit incididunt ullamco nostrud. Dolore do tempor veniam voluptate esse nisi esse sit consectetur officia nostrud consectetur enim in. Non fugiat incididunt voluptate qui id ex nostrud est aliqua reprehenderit laboris ullamco. Veniam occaecat ipsum ad ea in laboris nulla incididunt velit nisi quis ullamco proident labore.</p>
    <h2>The Team</h2>

    <StyledFlexContainer>
      <SetImg fluid={data.joshuaGatsbyImage.childImageSharp.fluid} />
      <div className='bio'>
        <h4>Joshua Douglas - <span>CEO</span></h4>
        <p>Nostrud irure sunt do Lorem aliqua elit ut labore dolore velit esse cupidatat. Ex sit eiusmod tempor non eu tempor veniam occaecat laboris quis ut mollit magna ex.</p>
      </div>
    </StyledFlexContainer>
  
    <StyledFlexContainer>
      <SetImg fluid={data.dieterGatsbyImage.childImageSharp.fluid} />
      <div className='bio'>
        <h4>Dieter Rams - <span>Product Designer</span></h4>
        <p>Nostrud irure sunt do Lorem aliqua elit ut labore dolore velit esse cupidatat. Ex sit eiusmod tempor non eu tempor veniam occaecat laboris quis ut mollit magna ex.</p>
      </div>
    </StyledFlexContainer>


    <StyledFlexContainer>
      <SetImg fluid={data.sennaGatsbyImage.childImageSharp.fluid} />
      <div className='bio'>
        <h4>Senna - <span>Office Dog</span></h4>
        <p>Nostrud irure sunt do Lorem aliqua elit ut labore dolore velit esse cupidatat. Ex sit eiusmod tempor non eu tempor veniam occaecat laboris quis ut mollit magna ex.</p>
      </div>
    </StyledFlexContainer>
  </div>


    <FindUsHere class='flexWrapperRight'/>
    
    </FlexTest>


  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    typingGatsbyImage: file(relativePath: {eq: "typing-macbook.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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