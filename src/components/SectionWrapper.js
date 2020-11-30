import React from 'react'


const SectionWrapper = (props) => {
  return (
    <div style={{ background: `${props.bgColour}` }}>
      {props.children}
    </div>
  )
}

export default SectionWrapper
