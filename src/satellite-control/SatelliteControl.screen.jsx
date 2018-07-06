import React from 'react'
import styled from 'react-emotion'

import Button from '../common/Button.component'
import * as Api from './SatelliteApi'
import Form from './SatelliteForm.component'
import List from './SatelliteList.component'
import Visualization from './SatelliteVisualization.component'

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
    const satellitesById = await Api.loadSatellites()
    this.setState({ satellitesById })
  }

  render() {
    return (
      <Wrapper>
        <ListWrapper>
          <List
            onSelect={this.handleListSelect}
            satellites={Object.values(this.state.satellitesById)}
            selectedId={this.state.selectedId}
          />
          <Button onClick={this.handleCreateClick}>Create new</Button>
        </ListWrapper>
        <Form
          onDelete={this.handleFormDelete}
          onSave={this.handleFormSubmit}
          satellite={this.state.selectedId && this.state.satellitesById[this.state.selectedId]}
        />
        <Visualization satellites={this.state.satellitesById} />
      </Wrapper>
    )
  }

  handleCreateClick = () => this.setState({ selectedId: undefined })

  handleFormDelete = () => {
    const id = this.state.selectedId
    Api.deleteSatellite(id)
    this.setState(state => {
      const { [id]: deleted, ...rest } = state.satellitesById
      return { satellitesById: rest, selectedId: undefined }
    })
  }

  handleFormSubmit = async (event, satellite) => {
    satellite = await Api.saveSatellite(satellite)
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

const ListWrapper = styled.div`
  border-right: thin solid #545772;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default SatelliteControl
