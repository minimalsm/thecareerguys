import React from "react"
import Nav from "../components/Nav"
import HomeSection from '../components/Homepage/HomeSection'
import CareersSection from '../components/Homepage/CareersSection'
import EducationSection from '../components/Homepage/EducationSection'
import FundingSection from '../components/Homepage/FundingSection'
import SectionWrapper from "../components/SectionWrapper"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
  <Layout>
    <HomeSection />   
    <SectionWrapper bgColour={'#BDBDBD'}>
      <CareersSection />
    </SectionWrapper>
    <EducationSection />
    <FundingSection />
    </Layout>
  </>
)

export default IndexPage
