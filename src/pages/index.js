import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JobCardContainer from "../components/JobCardContainer"
import MoreButton from "../components/MoreButton"
import Nav from "../components/Nav"

const IndexPage = () => (
  <>
    <Nav />
    <SEO title="Home" />

    {/* Home Section */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <h1>The Career Guys</h1>
      <p>The Career Guys was set up by Joshua Douglas as a reaction to the poor job-market created as a result of the COVID-19 pandemic. The aim is to help those who have put out of work or are experiencing dissatisfaction in their jobs and wish to transition to a new career.</p>
      <p>The Career Guys will provde you information on a wide-variety of career pathways as well as provide resources to educate yourself for these careers and funding options to fund your transistion.</p>
      <p>Good luck! We're all gonna make it!</p>
    </div>

    {/* Careers Section */}
    <div
    style={{
      background: `#BDBDBD`,
    }}
  >
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1024,
      padding: `0 1.0875rem 1.45rem`
    }}
  >
      <h2>Popular Careers</h2>
      <JobCardContainer />
      <MoreButton name="Show more"></MoreButton>
  </div>
    </div>

    {/* Education Section */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <h2>Education</h2>
    </div>

    {/* Funding Section */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <h2>Funding</h2>
    </div>
  </>
)

export default IndexPage
