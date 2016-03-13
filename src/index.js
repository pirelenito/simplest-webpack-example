import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './hello-world'

render(<HelloWorld/>, document.getElementById('container'))
