import React from 'react'
import JobCard from '../Shared/JobCard'

export const PlaceholderJobs = () => {
  return (
    <div>
      <JobCard class='jobcard' title={'Nurses'} soc={2231} salary={26520} />
      <JobCard class='jobcard' title={'Archivists and curators'} soc={2452} salary={16640} />
      <JobCard class='jobcard' title={'Boat and ship builders and repairers'} soc={5236} salary={33800} />
      <JobCard class='jobcard' title={'Furniture makers and other craft woodworkers'} soc={5442} salary={22360} />
    </div>
  )
}

export default PlaceholderJobs