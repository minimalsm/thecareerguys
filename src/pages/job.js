import React from 'react'
import Layout from '../components/layout'
import * as queryString from 'query-string'
import JobSection from '../components/Job/JobSection'


const JobPage = ({ location }) => {
  const { soc } = queryString.parse(location.search)

  return (
    <Layout>
      <JobSection soc={soc} />
    </Layout>   
  )
}

export default JobPage