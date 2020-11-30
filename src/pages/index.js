import React from "react"
import JobCardContainer from "../components/JobCardContainer"
import Nav from "../components/Nav"
import HomeSection from '../components/Homepage/HomeSection'
import EducationSection from '../components/Homepage/EducationSection'
import FundingSection from '../components/Homepage/FundingSection'

const IndexPage = () => (
  <>
    <Nav />
    <HomeSection />   

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
    <EducationSection />
    <FundingSection />
  </>
)

export default IndexPage
