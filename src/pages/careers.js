import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CareersSection } from '../components/Careers/CareersSection'

const CareersPage = () => {

  return (
    <Layout>
      <SEO title="Careers" />
      <CareersSection />
    </Layout>
  )
}

export default CareersPage
