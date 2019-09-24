import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    font-family: 'Montserrat',sans-serif;
    color: #3F51B5;

    padding-left: 40px;
    padding-bottom: 20px;
    font-size: 10px;
`

const AbTestItem = styled.p`
  text-transform: uppercase;
`

const ActiveTestsListing = () => {
  const activeAbTests = useSelector(state => state.activeAbTests)

  return (
    <Wrapper>
      <h3>Active Tests:</h3>
      {Object.entries(activeAbTests).map(([activeAbTestName, activeAbTestVariant]) =>
        <AbTestItem key={activeAbTestName}><span>{activeAbTestName}</span>: {activeAbTestVariant}</AbTestItem>
      )}
    </Wrapper>
  )
}

export default ActiveTestsListing
