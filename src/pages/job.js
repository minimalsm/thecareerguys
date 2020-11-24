import React from 'react'
import Layout from '../components/layout'
import * as queryString from "query-string";

const JobPage = (props) => {
  console.log(props.location.search)
  const { q } = queryString.parse(props.location.search);


  return (
    <Layout>
      <div>
      {q}
      </div>
    </Layout>
    
  )
}

export default JobPage;