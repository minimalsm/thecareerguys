import React from 'react'
import styled from 'styled-components'

const Search = ({ value, onChange }) => {
  return (
    <React.Fragment>
      <StyledInput
        placeholder={'Try searching \'front-end\''}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  )
}

export default Search

const StyledInput = styled.input`
  padding: 8px;
  width: 80%;
  border: 1px solid black;
  border-radius: 7px;
`