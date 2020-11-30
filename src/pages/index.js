import React from "react"
import SEO from "../components/seo"
import JobCardContainer from "../components/JobCardContainer"
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
      padding: `0 1.0875rem 1.45rem`,
      paddingTop: `20px`,
      paddingBottom: `25px`
    }}
  >
      <h2>Popular Careers</h2>
      <JobCardContainer />
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
      <p>The UK has some of the best further education in the world. We've arranged the options for you to help you make the best choice for you.</p>
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
      <p>Don't let money worries be the reason you don't make the switch to a new career. Checck out our resources for all the different ways of funding your new career!</p>
    </div>
  </>
)

export default IndexPage
