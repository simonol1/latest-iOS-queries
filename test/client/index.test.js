import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('Header renders on homepage', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Latest iOS Questions & Answers')
})
