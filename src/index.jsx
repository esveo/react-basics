// #if >=02
//   #if 02
// `React` still needs to be imported, because `<Hello name="JSX" />` will be
// transformed to `React.createElement(Hello, { name: "JSX" }`) by the transpiler.
//   #endif
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import App from './App'

//   #if 02

function Hello(props) {
  return <p>Hello, {props.name}</p>
}

// The JSX syntax will be transformed to a regular `React.createElement` call.
render(<Hello name="JSX" />, document.getElementById('app'))

//   #else
render(<App />, document.getElementById('app'))
//   #endif
// #endif
