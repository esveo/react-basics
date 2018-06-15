// #if >=02
//   #if 02
// `React.createElement` still needs to be imported, because `<Hello name="JSX" />` will be
// transformed to `React.createElement(Hello, { name: "JSX" }`) by the transpiler.
//   #endif
import React from 'react'
import { render } from 'react-dom'

//   #if 02
function Hello(props) {
  const text = `Hello, ${props.name}`
  return React.createElement('p', {}, text)
}

// The JSX syntax will be transformed to a regular `React.createElement` call.
render(<Hello name="JSX" />, document.getElementById('app'))
//   #else
import App from './App'

render(<App />, document.getElementById('app'))
//   #endif
// #endif
