import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bool, func, number, oneOf, shape, string } from 'prop-types'
import React from 'react'
import styled from 'react-emotion'

import Button from '../common/Button.component'
import { SATELLITE_TYPE_MAP } from './utility'

const NEW_SATELLITE = {
  id: undefined,
  name: '',
  reverse: false,
  speed: 1,
  type: Object.keys(SATELLITE_TYPE_MAP)[0],
}

/**
 * Form for creating and updating satellites.
 */
class SatelliteForm extends React.Component {
  static propTypes = {
    /**
     * Called when the form is submitted by clicking the delete button.
     *
     * @param {SyntheticEvent} event The underlying React event.
     */
    onDelete: func.isRequired,

    /**
     * Called when the form is submitted by clicking the save button.
     *
     * @param {SyntheticEvent} event The underlying React event.
     * @param {SatelliteData} satellite The data entered in the form.
     */
    onSave: func.isRequired,

    /**
     * The data of the selected satellite, if any.
     */
    satellite: shape({
      id: string,
      name: string.isRequired,
      reverse: bool.isRequired,
      speed: number.isRequired,
      type: oneOf(Object.keys(SATELLITE_TYPE_MAP)).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    satellite: NEW_SATELLITE,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.id === props.satellite.id) return null
    return props.satellite
  }

  state = NEW_SATELLITE

  render() {
    return (
      <Form>
        <Id>Id: {this.state.id || '<new>'}</Id>
        <Field>
          <Label>Name</Label>
          <Input onChange={this.handleNameChange} type="text" value={this.state.name} />
        </Field>
        <Field>
          <Label>Type</Label>
          <Icon icon={SATELLITE_TYPE_MAP[this.state.type].icon} />
          <Select onChange={this.handleTypeChange} value={this.state.type}>
            {Object.entries(SATELLITE_TYPE_MAP).map(([type, { name }]) => (
              <option key={type} value={type}>
                {name}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label>Speed</Label>
          <Input
            max={5.0}
            min={0.2}
            onChange={this.handleSpeedChange}
            step={0.2}
            type="range"
            value={this.state.speed}
          />
        </Field>
        <Field>
          <Label>Reverse</Label>
          <Input checked={this.state.reverse} onChange={this.handleReverseChange} type="checkbox" />
          Fly counter-clockwise against earth's rotation.
        </Field>
        <ButtonWrapper>
          <Button disabled={!this.state.name} onClick={this.handleSaveClick}>
            Save
          </Button>
          <Button onClick={this.handleResetClick}>Reset</Button>
          <Button disabled={!this.state.id} onClick={this.handleDeleteClick}>
            Delete
          </Button>
        </ButtonWrapper>
      </Form>
    )
  }

  handleNameChange = event => {
    const name = event.target.value
    this.setState({ name: name !== this.props.name ? name : undefined })
  }

  handleReverseChange = event => {
    const reverse = !!event.target.checked
    this.setState({ reverse: reverse !== this.props.reverse ? reverse : undefined })
  }

  handleSpeedChange = event => {
    const speed = +event.target.value
    this.setState({ speed: speed !== this.props.speed ? speed : undefined })
  }

  handleTypeChange = event => {
    const type = event.target.value
    this.setState({ type: type !== this.props.type ? type : undefined })
  }

  handleDeleteClick = event => this.props.onDelete(event)

  handleSaveClick = event => this.props.onSave(event, this.state)

  handleResetClick = () => this.setState(this.props.satellite)
}

const Form = styled.form`
  flex: 2;
  padding: 8px 16px;
`

const Id = styled.p`
  font-size: 110%;
  font-weight: bold;
  margin-bottom: 18px;
`

const Field = styled.label`
  display: block;
  margin-bottom: 16px;
`

const Label = styled.span`
  display: block;
  margin-bottom: 6px;
`

const Input = styled.input`
  &[type='checkbox'] {
    height: 16px;
    margin-right: 4px;
    transform: translateY(2px);
    width: 16px;
    vertical-align: baseline;
  }

  &[type='range'] {
    display: block;
    width: 100%;
  }

  &[type='text'] {
    display: block;
    padding: 2px 4px;
    width: 100%;
  }
`

const Select = styled.select`
  padding: 2px 4px;
`

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: 64%;
  margin-right: 12px;

  && {
    width: 22px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 36px;

  button {
    margin-right: 20px;
  }
`

export default SatelliteForm
