import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import EducationSection from '../components/Education/EducationSection'


const EducationPage = () => {
  return (
    <Layout>
      <SEO title="Education" />
      <EducationSection />
    </Layout>
  )
}

export default EducationPage
