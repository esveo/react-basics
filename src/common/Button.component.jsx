import { bool, func, string } from 'prop-types'
import React from 'react'
import styled from 'react-emotion'

/**
 * A clickable button.
 */
function Button(props) {
  return (
    <StyledButton
      disabled={!!props.disabled}
      onClick={event => {
        event.preventDefault()
        if (props.disabled) return
        props.onClick(event)
      }}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  /**
   * The text content of the button.
   */
  children: string.isRequired,

  /**
   * Whether the button is disabled.
   */
  disabled: bool,

  /**
   * Called whenever the button is clicked.
   *
   * @param {SyntheticEvent} event The underlying React event.
   */
  onClick: func.isRequired,
}

const StyledButton = styled.button`
  background: ${p => (p.disabled ? '#333d47' : '#104474')};
  color: ${p => (p.disabled ? '#888' : 'white')};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  line-height: 180%;
  padding: 0 16px;

  &:hover {
    background: ${p => (p.disabled ? '#333d47' : '#165fa1')};
  }
`

export default Button
