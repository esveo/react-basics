import React from 'react'
import styled from 'react-emotion'

import SatelliteControl from './satellite-control/SatelliteControl.screen'

function App(props) {
  return (
    <Wrapper>
      <SatelliteControl />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #20212c;
  color: white;
  height: 100%;
`

export default App
