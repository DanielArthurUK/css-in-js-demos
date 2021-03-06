import React, {Component} from 'react'
import StyledComponents from './components/StyledComponents'
import Radium from './components/Radium'
import Aphrodite from './components/Aphrodite'
import Emotion from './components/Emotion'
import Fela from './components/Fela'
import Styletron from './components/Styletron'
import JSS from './components/JSS'

class App extends Component {
  render () {
    return (
      <div>
        <Aphrodite />
        <Emotion />
        <Fela />
        <JSS />
        <Radium />
        <StyledComponents />
        <Styletron />
      </div>
    )
  }
}

export default App
