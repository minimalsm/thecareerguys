import React from 'react'
import HomeTextSection from '../components/Homepage/HomeTextSection'
import HomeCareersSection from '../components/Homepage/HomeCareersSection'
import HomeEducationSection from '../components/Homepage/HomeEducationSection'
import HomeFundingSection from '../components/Homepage/HomeFundingSection'
import SectionWrapper from '../components/Homepage/SectionWrapper'
import Layout from '../components/layout'

const IndexPage = () => (
  <>
    <Layout>
      <HomeTextSection />   
      <SectionWrapper bgColour={'#BDBDBD'}>
        <HomeCareersSection />
      </SectionWrapper>
      <HomeEducationSection />
      <HomeFundingSection />
    </Layout>
  </>
)

export default IndexPage
