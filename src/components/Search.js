import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 8px;
  width: 80%;
  border: 1px solid black;
  border-radius: 7px;
`

const Search = ({ value, onChange }) => {
  return (
    <div>
      <StyledInput
        placeholder={'Try searching \'full-stack\' or \'front-end\''}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Search