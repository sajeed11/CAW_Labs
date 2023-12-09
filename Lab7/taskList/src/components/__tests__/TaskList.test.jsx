// Testing the TaskList component

import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from '../TaskList.jsx'

describe('TaskList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TaskList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})