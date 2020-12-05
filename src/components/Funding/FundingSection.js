import React from 'react'
import FundingOption from './FundingOption'
import OtherPagesLinkContainer from '../Navigation/OtherPagesLinkContainer'
import styled from 'styled-components'

const FundingSection = ({ data }) => {
  return (
    <StyledSection>
      <h1>Funding Options</h1>
      <p>Nostrud irure sunt do Lorem aliqua elit ut labore dolore velit esse cupidatat. Ex sit eiusmod tempor non eu tempor veniam occaecat laboris quis ut mollit magna ex. Reprehenderit ad consectetur anim id deserunt dolore ipsum aliquip amet. Eiusmod mollit incididunt ullamco nostrud. Dolore do tempor veniam voluptate esse nisi esse sit consectetur officia nostrud consectetur enim in. Non fugiat incididunt voluptate qui id ex nostrud est aliqua reprehenderit laboris ullamco. Veniam occaecat ipsum ad ea in laboris nulla incididunt velit nisi quis ullamco proident labore.</p>

      <FundingOption 
        name={'The Scholarship Hub'}
        content={'The Scholarship Hub is a social enterprise both providing information on scholarships and developing new scholarships.'} 
        link={'https://www.thescholarshiphub.org.uk'}
        image={data.scholarshipHubGatsbyImage.childImageSharp.fluid}
      />
      <FundingOption 
        name={'Turn2Us'}
        content={'Turn2Us is a national charity helping people when times are tough. They provide information and financial support to those in need. They can be a great resource for potential funding and grants you may be edible for well as great general budgeting advice.'} 
        link={'https://www.turn2us.org.uk'}
        image={data.turn2UsGatsbyImage.childImageSharp.fluid}
      />
      <FundingOption 
        name={'UK Government Website - Student Finance'}
        content={'The UK government’s website is a fantastic resource for information regarding your funding your studies and further education. The website is remarkably easy to navigate and with the government’s seal of approval you can guarantee accuracy of information more so than many other portals.'} 
        link={'https://www.gov.uk/browse/education/student-finance'}
        image={data.govUkGatsbyImage.childImageSharp.fluid}
      />

      <OtherPagesLinkContainer 
        firstName={'Explore Careers'}
        firstLink={'careers'}
        secondName={'Explore Education Options'}
        secondLink={'education'}
      />
    </StyledSection>
  )
}

export default FundingSection

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.45rem;
`