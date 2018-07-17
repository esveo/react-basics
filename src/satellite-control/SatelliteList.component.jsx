import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { arrayOf, func, oneOf, shape, string } from 'prop-types'
import React from 'react'
import styled from 'react-emotion'

import { SATELLITE_TYPE_MAP } from './utility'

/**
 * A list view of all satellites.
 */
function SatelliteList(props) {
  return (
    <List onClick={event => handleListClick(event)}>
      {props.satellites.map(satellite => (
        <Item
          key={satellite.id}
          onClick={event => handleItemClick(event, satellite)}
          selected={props.selectedId === satellite.id}
        >
          <Icon icon={SATELLITE_TYPE_MAP[satellite.type].icon} />
          {satellite.name}
        </Item>
      ))}
    </List>
  )

  function handleListClick(event) {
    event.stopPropagation()
    props.onSelect(event, undefined)
  }

  function handleItemClick(event, satellite) {
    event.stopPropagation()
    props.onSelect(event, satellite.id)
  }
}

SatelliteList.propTypes = {
  /**
   * Called whenever the selected satellite changes.
   *
   * @param {SyntheticEvent} event The underlying React event.
   * @param {string} id The ID of the selected sattelite.
   */
  onSelect: func.isRequired,

  /**
   * The satellites to be displayed.
   */
  satellites: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      type: oneOf(Object.keys(SATELLITE_TYPE_MAP)).isRequired,
    }),
  ).isRequired,

  /**
   * The ID of the selected satellite.
   */
  selectedId: string,
}

const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li`
  background: ${p => (p.selected ? '#186ab3' : 'transparent')};
  cursor: pointer;
  display: block;
  line-height: 150%;
  padding: 0 8px;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${p => (p.selected ? '#186ab3' : '#313343')};
  }
`

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: 64%;
  margin-right: 6px;

  && {
    width: 22px;
  }
`

export default SatelliteList
