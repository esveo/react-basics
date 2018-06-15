// #if 01
// 📚 `React.createElement` takes a component, props and children and creates a React element
//    that can be rendered into the DOM.
// 📚 https://reactjs.org/docs/react-api.html#createelement
import React from 'react'

// 📚 `render` takes a React element and a DOM container element and renders the React element
//    into the DOM inside the container.
// 📚 https://reactjs.org/docs/react-dom.html#render
import { render } from 'react-dom'

// A React component that renders the paragraph "Hello, {name}".
// The name should be passed to the component via props.
function Hello(props) {
  const text = `Hello, ${props.name}`
  return React.createElement('p', {}, text)
}

// Create a React element from the Hello component.
const helloWorld = React.createElement(Hello, { name: 'world' })

// Choose a container where React should render the DOM into.
const container = document.getElementById('app')

// Render the React element into the DOM inside the container.
render(helloWorld, container)
// #endif
