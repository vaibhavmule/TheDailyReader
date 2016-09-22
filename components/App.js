import React from 'react'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
const App = () => (
  <MuiThemeProvider>
    <Header />
  </MuiThemeProvider>
)

export default App
