import React from 'react'
import styled from 'react-emotion'

import Button from '../common/Button.component'
import * as SatelliteApi from './SatelliteApi'
import SatelliteForm from './SatelliteForm.component'
import SatelliteList from './SatelliteList.component'
import SatelliteVisualization from './SatelliteVisualization.component'

/**
 * Allows the user to manage satellites.
 */
class SatelliteControl extends React.Component {
  state = {
    selectedId: undefined,
    satellitesById: {},
  }

  componentDidMount() {
    this.loadSatellites()
  }

  async loadSatellites() {
    const satellitesById = await SatelliteApi.loadSatellites()
    this.setState({ satellitesById })
  }

  render() {
    return (
      <Wrapper>
        <Section width={1}>
          <SatelliteList
            onSelect={this.handleListSelect}
            satellites={Object.values(this.state.satellitesById)}
            selectedId={this.state.selectedId}
          />
          <Button onClick={this.handleCreateClick}>Create new</Button>
        </Section>
        <Section width={2}>
          <SatelliteForm
            onDelete={this.handleFormDelete}
            onSave={this.handleFormSubmit}
            satellite={this.state.selectedId && this.state.satellitesById[this.state.selectedId]}
          />
        </Section>
        <Section width={3}>
          <SatelliteVisualization
            satellites={Object.values(this.state.satellitesById).map(satellite => ({
              ...satellite,
              isHighlit: satellite.id === this.state.selectedId,
            }))}
          />
        </Section>
      </Wrapper>
    )
  }

  handleCreateClick = () => this.setState({ selectedId: undefined })

  handleFormDelete = () => {
    const id = this.state.selectedId
    SatelliteApi.deleteSatellite(id)
    this.setState(state => {
      const { [id]: deleted, ...rest } = state.satellitesById
      return { satellitesById: rest, selectedId: undefined }
    })
  }

  handleFormSubmit = async (event, satellite) => {
    satellite = await SatelliteApi.saveSatellite(satellite)
    this.setState(state => ({
      satellitesById: { ...state.satellitesById, [satellite.id]: satellite },
      selectedId: satellite.id,
    }))
  }

  handleListSelect = (event, id) => this.setState({ selectedId: id })
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const Section = styled.div`
  border-right: thin solid #545772;
  display: flex;
  flex: ${p => p.width};
  flex-direction: column;

  & > :first-child {
    flex: 1;
  }
`

export default SatelliteControl
