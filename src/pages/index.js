import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JobCardContainer from "../components/JobCardContainer"
import MoreButton from "../components/MoreButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* Home Section */}
    <h1>The Career Guys</h1>
    <p>The Career Guys was set up by Joshua Douglas as a reaction to the poor job-market created as a result of the COVID-19 pandemic. The aim is to help those who have put out of work or are experiencing dissatisfaction in their jobs and wish to transition to a new career.</p>
    <p>The Career Guys will provde you information on a wide-variety of career pathways as well as provide resources to educate yourself for these careers and funding options to fund your transistion.</p>
    <p>Good luck! We're all gonna make it!</p>

    {/* Careers Section */}
    <h2>Popular Careers</h2>
    <JobCardContainer />
    <MoreButton name="Show more"></MoreButton>

    {/* Education Section */}
    <h2>Education</h2>

    {/* Funding Section */}
    <h2>Funding</h2>
  </Layout>
)

export default IndexPage
